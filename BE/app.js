const express = require('express')
const router = require('./routes/router')
const app = express()
const port = 3000

app.listen(port, () => console.log(`App listening on port ${port}!`))

app.use(express.json())

app.use('/api', router)

module.exports = app;
