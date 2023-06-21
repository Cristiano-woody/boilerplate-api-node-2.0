import App from './api/App'
import * as dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import { type IServer } from './api/interfaces/ IServer'

dotenv.config()

class Server implements IServer {
  readonly prisma: PrismaClient
  readonly portServer: string | undefined
  readonly app: App
  constructor (portserver: string | undefined) {
    this.prisma = new PrismaClient()
    this.portServer = portserver
    this.app = new App()
  }

  async start (): Promise<void> {
    await this.prisma.$connect()
    this.app.api.listen(this.portServer, () => {
      console.log(`\n 🔥 Aplicação iniciada na porta: ${this.portServer as string} 🔥`)
    })
  }
}

const server = new Server(process.env.PORT_API)
void server.start()
