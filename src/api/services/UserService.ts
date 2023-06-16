import { type IUserService } from '../interfaces/IUserService'
import { type IUserRepository } from '../interfaces/IUserRepository'
import UserEntity from '../entities/UserEntity'

class UserService implements IUserService {
  private readonly userRepository: IUserRepository

  constructor (UserRepository: IUserRepository) {
    this.userRepository = UserRepository
  }

  async create (user: UserEntity): Promise<void> {
    if (user !== undefined && user !== null) {
      const User = new UserEntity(user)
      await this.userRepository.create(User)
    } else {
      throw new Error('User body is missing')
    }
  }

  async getUser (id: string): Promise<UserEntity | undefined> {
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
