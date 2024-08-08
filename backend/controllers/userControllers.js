import mongoose from "mongoose"
import User from "../models/userModel.js";
import bcrypt from "bcrypt"

export const addFollower = async (req, res) => {
    const { id } = req.params;
    const { authorName } = req.body;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.followers.includes(authorName)) {
            return res.status(400).json({ message: `You are already following ${authorName}.` });
        }

        user.followers.push(authorName);
        await user.save();

        res.status(200).json({ message: `You are now following ${authorName}.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const removeFollower = async (req, res) => {
    const { id } = req.params;
    const { authorName } = req.body;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (!user.followers.includes(authorName)) {
            return res.status(400).json({ message: `You are not following ${authorName}.` });
        }

        user.followers = user.followers.filter(follower => follower !== authorName);
        await user.save();

        res.status(200).json({ message: `You have unfollowed ${authorName}.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllUser = async (req, res)=>{
    const userData = await User.find();
    if(!userData){
        return res.status(404).json({message: "No users found"});
    }
    const otherData = userData.map(user =>{
        const {password, ...otherData} = user._doc
        return otherData;
    })
    res.status(200).json(otherData);
}


export const getUser = async (req, res) =>{
    const {id} = req.params;
    try {
        const userData = await User.findById({_id : id});
        if(userData){
            const {password, ...otherData} = userData._doc
            res.status(200).json(otherData);
        }
        else{
            res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }

}

export const updateUser = async (req, res) =>{
    const {id} = req.params;
    const {password} = req.body;
    const currUserId = req.body._id;
    if(id === currUserId){
        try {
            const userData = await User.findById({_id : id});
            if(!userData){
                return res.status(404).json({message: "User not found"});
            }
            if(password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
            const updatedUser = await User.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );
            res.status(200).json(updatedUser);
            
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    else{
        res.status(403).json({message: "Unauthorized to update this user"});
    }
    
}