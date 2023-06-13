import UserEntity from '../entities/UserEntity'
import { type IUserrepository } from '../interfaces/IUserRepository'
import { PrismaClient } from '@prisma/client'

class UserRepository implements IUserrepository {
  private readonly prisma: PrismaClient

  constructor () {
    this.prisma = new PrismaClient()
  }

  async create (user: UserEntity): Promise<void> {
    const userEntity = new UserEntity(user)
    await this.prisma.user.create({
      data: {
        name: userEntity.name,
        email: userEntity.email,
        id: userEntity.id
      }
    })
  }

  async getAll (): Promise<UserEntity[] | null> {
    const AllUsers = await this.prisma.user.findMany()
    return AllUsers
  }

  async getUser (id: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })
    return user
  }

  async update (id: string): Promise<UserEntity | null> {
    console.log('usuário modificado')
    return null
  }

  async delete (id: string): Promise<UserEntity | null> {
    console.log('usuário deletado')
    return null
  }
}

export default UserRepository
