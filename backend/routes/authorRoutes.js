import express from "express"
import { getAuthorList, getAuthorQuotes, getAuthorSuggestion } from "../controllers/authorcontroller.js";

const router = express.Router();

router.get("/list", getAuthorList);
router.post("/quote", getAuthorQuotes);
router.post("/search", getAuthorSuggestion);

export default router;