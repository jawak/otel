const express = require('express')
const app = express()
const port = 3000
const logger = require('./winston')

app.get('/', (req, res) => {
    logger.log({
        level: 'info',
        message: {
            test: 'okee'
        }
    })
    res.send('Hello App 1')
})

app.get('/app2', (req, res) => {
    fetch('http://localhost:3001')
        .then((r) => {
            logger.log({
                level: 'info',
                message: {
                    app1: 'okee'
                }
            })
            res.send('okee')
        })
        .catch(e => {
            logger.log({
                level: 'error',
                message: {
                    error: e.message
                }
            })
            res.send(`error ${e.message}`)
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
