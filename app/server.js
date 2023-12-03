import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/api/events:eventID", async (req, res) => {
  const eventId = "21750539";
});
