const express = require("express")
const app = express()
//const cookieParser = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require("cors");

const corsOptions = {
    origin:["http://localhost:4000", "http://localhost:5173"],
    credentials: true
}

app.use(express.json());
app.use(cors(corsOptions));



const TEST = require("./route/TEST");
app.use("/api/TEST", TEST)


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});