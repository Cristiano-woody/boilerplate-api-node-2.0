
import type UserEntity from '../../entities/UserEntity'
import { type IUserRepository } from '../../interfaces/IUserRepository'

class MokUserRepository implements IUserRepository {
  async create (user: UserEntity): Promise<void> {
    console.log('creating user')
  }

  async getAll (): Promise<UserEntity[] | null> {
    const AllUsers = [{ name: 'user1', email: 'user@gmail.com', id: 'www' }, { name: 'user1', email: 'user@gmail.com', id: 'www' }]
    return AllUsers
  }

  async getUser (id: string): Promise<UserEntity | null> {
    const User = { name: 'user1', email: 'user@gmail.com', id: 'www' }
    return User
  }

  async update (body: UserEntity): Promise<UserEntity | null> {
    const User = { name: 'user1', email: 'user@gmail.com', id: 'www' }
    console.log('atualizou')
    return User
  }

  async delete (id: string): Promise<UserEntity | null> {
    const User = { name: 'user1', email: 'user@gmail.com', id: 'www' }
    console.log('deletou')
    return User
  }
}

export default MokUserRepository
