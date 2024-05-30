const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// ...

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// const fun = async () =>{
//     const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// fun()


app.use(express.json());
app.use(cors());

const port = process.env.PORT ||  8080 

app.post('/ai', async (req, res) => {

    try {
        const prompt = req.body.prompt

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.status(200).json( {result : text})

    } catch (error) {
        console.log(error)
        res.status(500).json({error : error})
    }

})


app.listen( port , ()=>{
    console.log(`server is running on port ${port}`)
})



