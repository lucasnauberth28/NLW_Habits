// Importações
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'
const app = Fastify()

// Ação de registro do CORS - configuração que nos permite acessar o banco de dados gerado pelo prisma
app.register(cors)
app.register(appRoutes)

// chamada de porta do website
app.listen({
    port: 3333
})