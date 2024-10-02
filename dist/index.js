"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const iiitkota_events_1 = require("./utils/iiitkota.events");
const iiitkota_announcements_1 = require("./utils/iiitkota.announcements");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/health', (req, res) => {
    res.json({
        message: " Perfect health"
    });
});
app.get('/events', (req, res) => {
    res.json(iiitkota_events_1.events);
});
app.get('/announcements', (req, res) => {
    res.json(iiitkota_announcements_1.announcements);
});
app.listen(3000, () => { console.log('server started successfully'); });
