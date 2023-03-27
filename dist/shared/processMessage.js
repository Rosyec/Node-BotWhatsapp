"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
const whatsappmodels_1 = require("./whatsappmodels");
const whatsappService_1 = require("../services/whatsappService");
const config_1 = require("../chatgpt/config");
function Process(textUser, number) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        textUser = textUser.toLowerCase();
        let models = [];
        if (textUser.includes("hola")) {
            //SAUDAR
            let model = (0, whatsappmodels_1.MessageText)("Hola, un gusto saludarte. 👋", number);
            models.push(model);
            // let modelList = MessageList(number);
            // models.push(modelList);
        }
        else if (textUser.includes("gracias")) {
            // agradecimiento
            let model = (0, whatsappmodels_1.MessageText)("Gracias a ti por escribirme. 😉😎", number);
            models.push(model);
        }
        else if (textUser.includes("adios") ||
            textUser.includes("adiós") ||
            textUser.includes("bye") ||
            textUser.includes("me voy")) {
            // despedir
            let model = (0, whatsappmodels_1.MessageText)("Ve con cuidado. 😊", number);
            models.push(model);
        }
        else if (textUser.includes("comprar")) {
            // comprar
            let model = (0, whatsappmodels_1.MessageComprar)(number);
            models.push(model);
        }
        else if (textUser.includes("vender")) {
            // vender
            let model = (0, whatsappmodels_1.MessageText)("👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
            models.push(model);
        }
        else if (textUser.includes("agencia")) {
            // agencia
            let model = (0, whatsappmodels_1.MessageText)("Aquí tienes nuestra dirección. 😊", number);
            models.push(model);
            let modelLocation = (0, whatsappmodels_1.MessageLocation)(number);
            models.push(modelLocation);
        }
        else if (textUser.includes("contacto")) {
            // vender
            let model = (0, whatsappmodels_1.MessageText)("📞*Centro de contacto:*\n3114486298", number);
            models.push(model);
        }
        else {
            //No entiende
            const resp = yield (0, config_1.questionToChatGPT)(textUser);
            // console.log('OPENAI: ', resp.data.choices[0].message?.content)
            let model = (0, whatsappmodels_1.MessageText)(((_a = resp.data.choices[0].message) === null || _a === void 0 ? void 0 : _a.content) || 'Puedes repetir nuevamente la pregunta?', number);
            models.push(model);
        }
        ;
        models.forEach(model => {
            (0, whatsappService_1.SendMessageWhatsapp)(model);
        });
    });
}
exports.Process = Process;
