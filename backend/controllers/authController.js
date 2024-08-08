import express from "express"
import mongoose from "mongoose"
import User from "./../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();


const creatToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

export const resgiterUser = async (req, res)=>{
    const {name, email, password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({name, email, password : hashedPassword});
        await user.save();

        const token = creatToken(user._id);
        res.status(201).json({success:true, token});

        // res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const loginUser = async (req, res)=>{
    const {email, password} = req.body;

    try {
        const userData = await User.findOne({email});
        if(!userData){
            return res.status(404).json({message: "User not found"});
        }
        const isPassValid = bcrypt.compareSync(password, userData.password);
        if(!isPassValid){
            return res.status(400).json({message: "Invalid password"});
        }
        const token = creatToken(userData._id);
        return res.status(200).json({success:true, token:token});
        // res.status(200).json({ message: "Login successful"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

