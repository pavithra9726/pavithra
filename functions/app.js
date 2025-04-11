import "./database.js";

import express from "express";
import { PostModule1 } from "./models.js";
export const app = express();

app.use(express.json());

app.get("/api/search", (req, res) => {
  const text = req.query.text;

  PostModule1.find({
    $or: [
      {
        title: new RegExp(text, "i"),
      },
      {
        content: new RegExp(text, "i"),
      },
    ],
  })
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      console.error("Failed to search!", error);

      res.status(500).send({
        message: "Failed to search!",
      });
    });
})