import express = require("express");
import * as statusController from "./controllers/status";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 5000);

// API Endpoints
app.get('/', (req, res) => {
    res.send("Hi")   
})

//more end pont add
app.get('/hi',statusController.hi);
app.get('/find',statusController.find);
app.get('/remove',statusController.remove);

// export our app
export default app;