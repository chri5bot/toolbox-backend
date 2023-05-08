const express = require("express");
const axios = require("axios");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/v1/secret/files", async (req, res) => {
  try {
    const response = await axios.get(
      "https://echo-serv.tbxnet.com/v1/secret/files",
      {
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`,
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
