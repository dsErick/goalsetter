import express from 'express'
import colors from 'colors'
import 'dotenv/config'

import goalsRoutes from './routes/goalsRoutes.js'

// Inicialização do express
const app = express()


/**
 * Rotas
 */
app.use('/api/v1/goals', goalsRoutes)


/**
 * Iniciando a conexão do app
 */
const port = process.env.PORT || 5000
const server = app.listen(port, () => console.log(colors.blue.bold(`Goalsetter running on port ${port}`)))

// console.log(server)
// console.log(process.env, process.env.PORT)

/**
 * Lidando com possíveis erros
 */
process.addListener('uncaughtException', e => console.log(e))
process.addListener('unhandledRejection', e => console.log(e))
