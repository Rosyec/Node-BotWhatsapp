import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
    organization: "org-gatDsfGxDKbq2ZYipptNxIPO",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const questionToChatGPT = async ( question: string ) => {
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-0301',
        messages: [ { role: 'user', content: question } ]
    });
    return response;
}

export {
    questionToChatGPT
}