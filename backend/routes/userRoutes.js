import express from "express"
import { getUser, updateUser, getAllUser, addFollower, removeFollower } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUser);
router.put("/update/:id", updateUser);
router.put("/:id/follow", addFollower);
router.put("/:id/unfollow", removeFollower);


export default router;