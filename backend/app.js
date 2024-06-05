const express = require('express');
const app = express();
const port = 3000
const mongoose= require("mongoose");
const { addUser } = require("./handlers/userHandler");

var cors = require("cors");

app.get('/users', (req, res) => {
  res.send('Hello World!')
});

app.post('/users',async (req, res) => {
    await addUser(req.body)
    res.send('Done');
  });

async function connectDb(){
    await mongoose.connect("mongodb://localhost:27017/", {
        dbName: "UsersDb"
    });
   
}
connectDb().catch((err)=> console.error(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})