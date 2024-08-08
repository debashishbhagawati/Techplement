const URL = "https://api.quotable.io"

export const getRandomQuote = async (req, res) => {
    try {
        const response = await fetch(`${URL}/random`)
            .then(response => response.json());

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "Failed to get random quote" });
    }
}

export const getMultipleRandomQuotes = async (req, res)=>{
    try {
        const quantity = req.body.quantity;
        const response = await fetch(`${URL}/quotes/random?limit=${quantity}`)
        .then(response => response.json());

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "Failed to get multiple random quotes" });
    }
}

export const getAuthorQuotes = async (req, res) =>{
    try {
        const author_slug = req.body.author_slug;
        const response = await fetch(`${URL}/quotes?author=${author_slug}`)
        .then(response => response.json());

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "Failed to get author quotes" });
    }
}
