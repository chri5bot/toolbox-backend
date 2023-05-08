require("dotenv").config();

const port = process.env.PORT || 3000;
const secret = process.env.SECRET_KEY;

const express = require("express");
const axios = require("axios");

const app = express();

app.get("/v1/secret/files", async (req, res) => {
  try {
    const response = await axios.get(
      "https://echo-serv.tbxnet.com/v1/secret/files",
      {
        headers: {
          Authorization: `Bearer ${secret}`,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status).send(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
