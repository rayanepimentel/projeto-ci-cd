// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from CI/CD Pipeline! Feature exemplo 1');
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));