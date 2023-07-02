
import UserEntity from '../../entities/UserEntity'
import { type IUserRepository } from '../../interfaces/IUserRepository'

class MokUserRepository implements IUserRepository {
  public users: UserEntity[]

  constructor () {
    this.users = []
  }

  async create (user: UserEntity): Promise<void> {
    const newUser = new UserEntity(user)
    this.users.push(newUser)
  }

  async getAll (): Promise<UserEntity[]> {
    return this.users
  }

  async getUser (id: string): Promise<UserEntity | undefined> {
    for (let i = 0; i <= this.users.length; i++) {
      const idUser = this.users[i].id
      if (idUser === id) {
        return this.users[i]
      }
    }
  }

  async getUserByEmail (email: string): Promise<UserEntity | undefined> {
    for (let i = 0; i <= this.users.length; i++) {
      const User = this.users[i].email
      if (User === email) {
        return this.users[i]
      }
    }
  }

  async update (body: UserEntity): Promise<void> {
  }

  async delete (id: string): Promise<void> {
  }
}

export default MokUserRepository
