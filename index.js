const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 400;

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
});
