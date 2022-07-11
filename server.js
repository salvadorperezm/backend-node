const express = require("express");
const router = express.Router();

let app = express();

app.use(router);

router.get("/message", (req, res) => {
  res.send("List of messages");
});

// hay que descargar insomnia
router.post("/message", (req, res) => {
  res.send("Message sent");
});

router.delete("/message", (req, res) => {
  res.send("Message deleted");
});

app.listen(3000);
console.log("App running in: http://localhost:3000");
