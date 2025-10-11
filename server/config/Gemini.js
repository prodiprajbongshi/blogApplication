 
 
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    console.error("No text found in Gemini response");
  }  

  return response.text
}
 


export default main;
