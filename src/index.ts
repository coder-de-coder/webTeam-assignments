import express from "express";
import { events } from "./utils/iiitkota.events";
import { announcements } from "./utils/iiitkota.announcements";
const app = express();

app.use(express.json());

app.get('/events', (req, res) => {
    res.json(events)
})

app.get('/announcements', (req, res)=>{
    res.json(announcements)
})


app.listen(3000, ()=>{console.log('server started successfully')})
