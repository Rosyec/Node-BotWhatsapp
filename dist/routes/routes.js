"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const whatsappController_1 = require("../controllers/whatsappController");
const router = express_1.default.Router();
exports.router = router;
router.get('/', whatsappController_1.VerifyToken);
router.post('/', whatsappController_1.ReceivedMessage);
