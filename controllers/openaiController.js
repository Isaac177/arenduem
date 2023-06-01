const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    //apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.fetchSuggestions = async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.5,
        });

        const suggestion = response.data.choices[0].text.trim();
        res.status(200).json({ suggestion: suggestion });
    } catch (error) {
        console.error("Error fetching suggestions from OpenAI API:", error);
        res.status(500).json({ error: "Error fetching suggestions from OpenAI API" });
    }
};

