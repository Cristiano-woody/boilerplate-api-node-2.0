import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { routes } from '.'
import { type PrismaClient } from '@prisma/client'
import { prisma } from '../db/PrismaClient'

dotenv.config()

class App {
  readonly api: express.Application
  readonly portServer: string | undefined
  readonly prisma: PrismaClient
  constructor (portserver: string | undefined) {
    this.portServer = portserver
    this.prisma = prisma
    this.api = express()
    this.api.use(express.json())
    this.api.use(express.urlencoded({ extended: true }))
    this.api.use(routes)
    this.api.use(cors())
  }

  async start (): Promise<void> {
    await this.prisma.$connect()
    this.api.listen(this.portServer, () => {
      console.log(`\n 🔥 Aplicação iniciada na porta: ${this.portServer as string} 🔥`)
    })
  }
}

const app = new App(process.env.PORT_API)
void app.start()
