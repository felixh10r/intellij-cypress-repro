const express = require('express')
const app = express()

require('@cypress/code-coverage/middleware/express')(app)

const port = process.env.PORT || '3000'

app.use((req, resp) => {
    resp.send('ok')
})

app
    .listen(port, () => console.info(`Listening on port ${port}…`))
