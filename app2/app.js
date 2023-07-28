const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello App 2')
})

app.get('/app1', (req, res) => {
    fetch('http://localhost:3000')
        .then((r) => {
            res.send('okee')
        })
        .catch(e => console.log(e))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
