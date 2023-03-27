import { MessageComprar, MessageList, MessageLocation, MessageText } from './whatsappmodels'
import { SendMessageWhatsapp } from '../services/whatsappService';
import { questionToChatGPT } from '../chatgpt/config';

async function Process(textUser: string, number: string){
    textUser= textUser.toLowerCase();
    let models: string[] = [];

    if(textUser.includes("hola")){
        //SAUDAR
        let model = MessageText("Hola, un gusto saludarte, preguntame lo que quieras. 🤖", number);
        models.push(model);
        // let modelList = MessageList(number);
        // models.push(modelList);
    }
    else if(textUser.includes("gracias")){
        // agradecimiento
        let model = MessageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);       
    }
    else if(textUser.includes("adios") ||
    textUser.includes("adiós")||
    textUser.includes("bye")||
    textUser.includes("me voy")
    ){
        // despedir
        let model = MessageText("Ve con cuidado. 😊", number);
        models.push(model);
    }
    // else if(textUser.includes("comprar")){
    //     // comprar
    //     let model = MessageComprar(number);
    //     models.push(model);

    // }
    // else if(textUser.includes("vender")){
    //     // vender
    //     let model = MessageText("👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
    //     models.push(model);       

    // }
    // else if(textUser.includes("agencia")){
    //     // agencia
    //     let model = MessageText("Aquí tienes nuestra dirección. 😊", number);
    //     models.push(model);
    //     let modelLocation = MessageLocation(number);
    //     models.push(modelLocation);       

    // }
    // else if(textUser.includes("contacto")){
    //     // vender
    //     let model = MessageText("📞*Centro de contacto:*\n3114486298", number);
    //     models.push(model);       

    // }
    else{
        //No entiende
        const resp = await questionToChatGPT( textUser );
        let model = MessageText(resp.data.choices[0].message?.content || 'Puedes repetir nuevamente la pregunta?', number);
        models.push(model);
        };

    models.forEach(model => {
        SendMessageWhatsapp(model);
    });

}

export {
    Process
};