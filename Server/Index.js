  const express = require("express");
  const mongoose = require("mongoose");
  const cors = require("cors");
  const bcrypt = require("bcrypt");
  const dotenv = require("dotenv");
  const userModel = require('./model/User')


  dotenv.config();
  const app = express();
  app.use(express.json());
  app.use(cors());

  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log("error connecting to mongoose", err));

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 5000 ${process.env.PORT}`);
  });

  app.post("/signup", async (req, res) => {
    try {
      const { username, email, password } = req.body;
      console.log(username + " " + email + " " + password);
      const existingUser = await userModel.findOne({ email });
      console.log(existingUser);
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new userModel({
        username,
        password: hashedPassword,
        email,
      });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/login",async(req,res)=>{
    try{
      const {username,password}=req.body;
      console.log(username+" "+password);
      const user = await userModel.findOne({username});
      if(!user){
        return res.status(400).json({error:"User not found"});
      }
      const passwordmatch= await bcrypt.compare(password,user.password);
      if(!passwordmatch){
        return res.status(400).json({error:"Invalid password"});
      }

      res.status(200).json({ message: "Login successful", username: user.username });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    
    }
    );