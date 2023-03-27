"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageWhatsapp = void 0;
const https_1 = __importDefault(require("https"));
function SendMessageWhatsapp(data) {
    const options = {
        host: "graph.facebook.com",
        path: "/v15.0/123317400684304/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAADGDugxplsBALQmIyZCxgH1SkxGClGLqUqy21xAio3FsmfbcyS4oZCbNQkbE6BpqQKyqoAyfNPn7bHNc5BGRRNYFUqeCnABnFsGYyBXnwFcauRH14GHdm4z4AUnNvcCqZBhlXuYZBmilwn0giYXlR3KLShxxNSrJDwkxtAl7MANhePX4blEplfleZCjydOMfqUBccTWZAZAQZDZD"
        }
    };
    const req = https_1.default.request(options, resp => {
        resp.on('data', data => {
            process.stdout.write(data);
        });
    });
    req.on("error", error => {
        console.log(error);
    });
    req.write(data);
    req.end();
}
exports.SendMessageWhatsapp = SendMessageWhatsapp;
