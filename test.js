// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)

// const api = "AIzaSyBIThDm2OJvW7S631Lv_MNtFFtodldWmcg"

// const genAI = new GoogleGenerativeAI(api);

// async function run() {
//   // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

//   const prompt = "hey how are you."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();