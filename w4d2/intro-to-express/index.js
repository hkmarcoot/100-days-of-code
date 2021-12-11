//Import express from the node_modules
import express from "express";

//assign variable app to be an object - express()
const app = express();

//Set the port to 3000
const PORT = 3000;

//Response the request by sending "Hello World" at "/" webpage

app.get("/", (req, res) => {
    const data = {
        message: 'Hello World'
    }
  //res.send("Hello World again");
  res.json(data);
});

app.get("/secret", (req, res) => {
    const data = {
        message: 'Here is the secret'
    }
  res.json(data);
});

//Listening at the localhost:PORT and send console.log at terminal
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
