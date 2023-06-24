import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const connectDB = async (): Promise<void> => {
  await prisma.$connect()
}

const disconnectDB = async (): Promise<void> => {
  await prisma.$disconnect()
}

export { prisma, connectDB, disconnectDB }
