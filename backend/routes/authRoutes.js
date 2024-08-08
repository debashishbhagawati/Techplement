import express from "express"
import mongoose from "mongoose"
import {
    resgiterUser,
    loginUser,
}
from "./../controllers/authController.js"


const router = express.Router();

router.post("/register", resgiterUser);
router.post("/login", loginUser);


export default router;