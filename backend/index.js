import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/chats", (req, res) => {
    res.json(chats);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));