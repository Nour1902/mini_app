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

const Affectation = require("./Route/Affectation");
app.use("/api/AffectationRoute", Affectation)

const Utilisateurs = require("./Route/PersonneRoute");
app.use("/api/PersonneRoute", Utilisateurs)


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});