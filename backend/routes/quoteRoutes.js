import express from "express"
import {getRandomQuote, getMultipleRandomQuotes, getAuthorQuotes} from ".././controllers/quoteController.js"

const router = express.Router();

router.get("/random", getRandomQuote);
router.post("/random/multiple", getMultipleRandomQuotes);
router.post("/author-quote", getAuthorQuotes);

export default router;