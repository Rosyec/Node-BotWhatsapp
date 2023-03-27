"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
// import { questionToChatGPT } from './chatgpt/config';
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || '3000';
app.set("PORT", PORT);
app.use(express_1.default.json());
app.use('/whatsapp', routes_1.router);
// questionToChatGPT( 'Como pelar una manzana?' ).then((resp)=>{
//     console.log('OPENAI: ', resp.data.choices[0].message?.content)
// });
app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});
