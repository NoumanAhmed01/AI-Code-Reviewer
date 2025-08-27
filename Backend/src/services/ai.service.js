const {GoogleGenerativeAI}= require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API);
const model = genAI.getGenerativeModel({model: "gemini-2.0-flash",
    systemInstruction: "You are an expert code reviewer, who have an experties in development. you look for the code and find the problems and suggest the solutions for the developer to improve the code qualitiy and performance. you always find the best solution for the developer and also try to make the code mmore efficient and clean",});


async function generateContent(code) {
  const result = await model.generateContent(code);
  return result.responce.text();
  
} 

module.exports = generateContent;