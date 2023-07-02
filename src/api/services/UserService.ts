import { type IUserService } from '../interfaces/IUserService'
import { type IUserRepository } from '../interfaces/IUserRepository'
import type UserEntity from '../entities/UserEntity'
import { type IUserValidator } from '../interfaces/IUserValidator'

class UserService implements IUserService {
  private readonly userRepository: IUserRepository
  private readonly userValidator: IUserValidator

  constructor (UserRepository: IUserRepository, UserValidator: IUserValidator) {
    this.userValidator = UserValidator
    this.userRepository = UserRepository
  }

  async create (user: UserEntity): Promise<void> {
    if (user.name !== undefined && user.name !== null && user.email !== undefined && user.email !== null) {
      const isValidEmail = this.userValidator.EmailValidator(user.email)
      if (!isValidEmail) {
        throw new Error('Email is not valid')
      }

      const userExist = await this.userRepository.getUserByEmail(user.email)
      if (userExist !== undefined) {
        throw new Error('Email already exist')
      }

      await this.userRepository.create(user)
    } else {
      throw new Error('User body is missing')
    }
  }

  async getUser (id: string): Promise<UserEntity | null> {
    const user = await this.userRepository.getUser(id)
    if (user !== undefined && user !== null) {
      return user
    } else {
      throw new Error(`User ${id} does not exist`)
    }
  }

  async getUserByEmail (email: string): Promise<UserEntity | undefined> {
    const user = await this.userRepository.getUserByEmail(email)
    if (user !== undefined && user !== null) {
      return user
    } else {
      throw new Error(`User ${email} does not exist`)
    }
  }

  async getAll (): Promise<UserEntity[] | undefined> {
    const users = await this.userRepository.getAll()
    if (users !== undefined && users !== null) {
      return users
    }
  }

  async update (id: string, data: UserEntity): Promise<void> {
    const { name, email } = data
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

  async delete (id: string): Promise<void> {
    const user = await this.userRepository.getUser(id)
    if (user !== undefined && user !== null) {
      await this.userRepository.delete(id)
    } else {
      throw new Error('User not exist')
    }
  }
}

export default UserService
