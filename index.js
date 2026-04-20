const express = require('express');
const app = express();

app.use(json());

app.get('/', (req, res) => {
    res.json({
        message: "API is running.."
    })
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server running on port ${PORT}`);
})