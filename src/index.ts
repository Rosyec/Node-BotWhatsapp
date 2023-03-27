import express, { Express } from 'express';
import { router } from './routes/routes';
// import { questionToChatGPT } from './chatgpt/config';
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();

const PORT = process.env.PORT || '3000';

app.set("PORT", PORT);

app.use(express.json());

app.use('/whatsapp', router);

// questionToChatGPT( 'Como pelar una manzana?' ).then((resp)=>{
//     console.log('OPENAI: ', resp.data.choices[0].message?.content)
// });

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});