import UserEntity from '../entities/UserEntity'
import { type IUserRepository } from '../interfaces/IUserRepository'
import { PrismaClient } from '@prisma/client'

class UserRepository implements IUserRepository {
  private readonly prisma: PrismaClient

  constructor () {
    this.prisma = new PrismaClient()
  }

  async create (user: UserEntity): Promise<void> {
    const userEntity = new UserEntity(user)
    if (userEntity.id !== undefined) {
      await this.prisma.user.create({
        data: {
          name: userEntity.name,
          email: userEntity.email,
          id: userEntity.id
        }
      })
    }
  }

  async getAll (): Promise<UserEntity[] | null> {
    const AllUsers = await this.prisma.user.findMany()
    return AllUsers
  }

  async getUser (id: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      // eslint-disable-next-line object-shorthand
      where: { id: id }
    })
    return user
  }

  async update (body: UserEntity): Promise<UserEntity | null> {
    const user = await this.prisma.user.update({
      where: { id: body.id },
      data: {
        name: body.name,
        email: body.email
      }
    })
    return user
  }

  async delete (id: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.delete({
      // eslint-disable-next-line object-shorthand
      where: { id: id }
    })
    return user
  }
}

export default UserRepository
