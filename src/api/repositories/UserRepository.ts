import UserEntity from '../entities/UserEntity'
import { type IUserRepository } from '../interfaces/IUserRepository'
import { type PrismaClient } from '@prisma/client'
import { prisma } from '../../db/PrismaClient'

class UserRepository implements IUserRepository {
  private readonly prisma: PrismaClient

  constructor () {
    this.prisma = prisma
  }

  async create (user: UserEntity): Promise<UserEntity | undefined> {
    const userEntity = new UserEntity(user)
    if (userEntity.id !== undefined) {
      const user = await this.prisma.user.create({
        data: {
          name: userEntity.name,
          email: userEntity.email,
          id: userEntity.id
        }
      })
      return user
    }
  }

  async getAll (): Promise<UserEntity[]> {
    const AllUsers = await this.prisma.user.findMany()
    return AllUsers
  }

  async getUser (id: string): Promise<UserEntity | undefined> {
    const user = await this.prisma.user.findUnique({
      // eslint-disable-next-line object-shorthand
      where: { id: id }
    })
    if (user !== undefined && user !== null) {
      return user
    }
  }

  async getUserByEmail (email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      // eslint-disable-next-line object-shorthand
      where: { email: email }
    })
    return user
  }

  async update (body: UserEntity): Promise<UserEntity | undefined> {
    const user = await this.prisma.user.update({
      where: { id: body.id },
      data: {
        name: body.name,
        email: body.email
      }
    })
    return user
  }

  async delete (id: string): Promise<UserEntity | undefined> {
    const user = await this.prisma.user.delete({
      // eslint-disable-next-line object-shorthand
      where: { id: id }
    })
    return user
  }
}

export default UserRepository
