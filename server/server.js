const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})

app.get('/api', (req, res) => {
    res.send('Hello from our server!')
})
