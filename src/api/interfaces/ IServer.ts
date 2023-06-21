import { type PrismaClient } from '@prisma/client'

export interface IServer {
  readonly portServer: string | undefined
  readonly prisma: PrismaClient
  start: () => Promise<void>
}
