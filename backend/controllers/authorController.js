const URL = "https://api.quotable.io"
import {authorSlugMap} from "./../../frontend/src/assets/public_assets.js";

let allAuthor = [];

export const getAuthorList = async (req, res)=>{
    let currentPage = 1;
    const maxItemsPerPage = 150;

    try {
        while(true){
            const response = await fetch(`${URL}/authors?page=${currentPage}&limit=${maxItemsPerPage}`)
            .then(response => response.json());
            const items = response.results.map((post)=>{
                return {
                    name : post.name,
                    slug : post.slug
                }
            });
            allAuthor = allAuthor.concat(items);

            if(response.results.length < maxItemsPerPage){
                break;
            }

            currentPage++;
        }
        return res.status(200).json(allAuthor);

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Failed to get author list" });
    }
}

export const getAuthorQuotes = async (req, res)=>{
    let {name} = req.body;
    try {
        const author_slug = authorSlugMap[name];
        const response = await fetch(`${URL}/quotes?author=${author_slug}`)
        .then(response => response.json());
        // console.log(response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "Failed to get author quotes" });
    }
}

export const getAuthorSuggestion = async (req, res)=>{
    const {query} = req.body;
    const response = await fetch(`${URL}/search/authors?query=${query}`)
    .then(response => response.json());

    const author_suggestion = response.results.map((post)=>{
        return post.name;
    });
    res.status(200).json(author_suggestion);
}