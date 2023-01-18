// Importações
import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

// Constantes para acesso dos imports
const app = Fastify()
const prisma = new PrismaClient();

// Ação de registro do CORS - configuração que nos permite acessar o banco de dados gerado pelo prisma
app.register(cors)

// Método GET do HTTP 
app.get('/', async () => {
    // Chamada do banco a partir do método, chama-se o client e se acessa o banco de dados
    const habits = await prisma.habit.findMany();

    return habits
})

// chamada de porta do website
app.listen({
    port: 3333
})