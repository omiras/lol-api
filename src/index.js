// In src/index.js
const express = require("express");

const v1ChampionsRouter = require("./v1/routes/championsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// *** REMOVE ***
app.get("/", (req, res) => {
    res.send("<h2>It's Working!</h2>");
});

// *** ADD ***
app.use("/api/v1/champions", v1ChampionsRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});