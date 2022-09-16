const express = require('express');
const connectDb = require('./Config/db')
const cors = require('cors');
const port = 8085;


const app = express();
app.use(cors());
app.use(express.json());
// connect to mongo database
connectDb();
//setup routes
const routes = require("./Routes");
routes(app);

app.listen(port, function () {
    console.log(`Todos API running on port ${port}`);
});