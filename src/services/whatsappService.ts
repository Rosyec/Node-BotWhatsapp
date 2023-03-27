import https from 'https';
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.META_API_KEY;

function SendMessageWhatsapp(data: string) {
    const options = {
        host : "graph.facebook.com",
        path: "/v15.0/123317400684304/messages",//106467972394644 Test Number
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ API_KEY }`
        }
    }
    const req = https.request(options, resp => {
        resp.on('data', data => {
            process.stdout.write(data);
        })
    });

    req.on("error", error => {
        console.log(error);
    } );

    req.write(data);
    req.end();
}

export {
    SendMessageWhatsapp
}