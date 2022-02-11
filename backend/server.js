import express from 'express'
import colors from 'colors'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 5000

app.get('/', (_, res) => res.status(200).send('Running!'))

app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Running!',
        data: {
            query: req.query,
            params: req.params,
            body: req.body,
        },
    })
})


const server = app.listen(port, () => console.log(colors.blue.bold(`Goalsetter running on port ${port}`)))

// console.log(server)
// console.log(process.env, process.env.PORT)

process.addListener('uncaughtException', e => console.log(e))
process.addListener('unhandledRejection', e => console.log(e))
