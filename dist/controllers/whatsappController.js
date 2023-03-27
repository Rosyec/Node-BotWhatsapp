"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = exports.ReceivedMessage = void 0;
const processMessage_1 = require("../shared/processMessage");
const VerifyToken = (req, resp) => {
    try {
        const accessToken = "ASKDJLAKSJDAS475ASD468A7SD";
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];
        if (challenge !== null && token !== null && token === accessToken) {
            resp.send(challenge);
        }
        else {
            resp.status(400).send("Bad Request");
        }
    }
    catch (error) {
        resp.status(400).send("Bad Request");
    }
};
exports.VerifyToken = VerifyToken;
const ReceivedMessage = (req, resp) => {
    try {
        const entry = req.body.entry[0];
        const changes = entry.changes[0];
        const value = changes.value;
        const messageObject = value.messages;
        if (typeof messageObject !== "undefined") {
            const messages = messageObject[0];
            const number = messages.from;
            const text = GetTextUser(messages);
            if (text != "") {
                (0, processMessage_1.Process)(text, number);
            }
        }
        resp.send("EVENT_RECEIVED");
    }
    catch (error) {
        resp.send("EVENT_RECEIVED");
    }
};
exports.ReceivedMessage = ReceivedMessage;
function GetTextUser(messages) {
    let text = "";
    const typeMessage = messages.type;
    if (typeMessage === "text") {
        text = messages.text.body;
    }
    else if (typeMessage === "interactive") {
        const interactiveObject = messages.interactive;
        const typeInteractive = interactiveObject.type;
        if (typeInteractive === "button_reply") {
            text = interactiveObject.button_reply.title;
        }
        else if (typeInteractive === "list_reply") {
            text = interactiveObject.list_reply.title;
        }
    }
    return text;
}
