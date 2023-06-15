import { type IUserService } from '../interfaces/IUserService'
import { type IUserRepository } from '../interfaces/IUserRepository'
import { type Request } from 'express'
import UserEntity from '../entities/UserEntity'

class UserService implements IUserService {
  private readonly userRepository: IUserRepository

  constructor (UserRepository: IUserRepository) {
    this.userRepository = UserRepository
  }

  async create (req: Request): Promise<void> {
    if (req.body !== undefined && req.body !== null) {
      const User = new UserEntity(req.body)
      await this.userRepository.create(User)
    } else {
      throw new Error('User body is missing')
    }
  }

  async getUser (req: Request): Promise<UserEntity | undefined> {
    const { id } = req.params
    const user = await this.userRepository.getUser(id)
    if (user !== undefined && user !== null) {
      return user
    } else {
      throw new Error(`User ${id} does not exist`)
    }
  }

  async getAll (): Promise<UserEntity[] | undefined> {
    const users = await this.userRepository.getAll()
    if (users !== undefined && users !== null) {
      return users
    }
  }

  async update (req: Request): Promise<void> {
    const { id } = req.body
    const { name, email } = req.body.data
    const user = await this.userRepository.getUser(id)
    if (user !== undefined && user !== null) {
      if (name !== undefined && name !== null) {
        user.name = name
      }
      if (email !== undefined && email !== null) {
        user.email = email
      }
      await this.userRepository.update(user)
    } else {
      throw new Error('User not exist')
    }
  }

  async delete (req: Request): Promise<void> {
    const { id } = req.params
    const user = await this.userRepository.getUser(id)
    if (user !== undefined && user !== null) {
      await this.userRepository.delete(id)
    } else {
      throw new Error('User not exist')
    }
  }
}

export default UserService
