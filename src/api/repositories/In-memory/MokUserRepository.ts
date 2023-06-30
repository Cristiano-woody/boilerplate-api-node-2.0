
import UserEntity from '../../entities/UserEntity'
import { type IUserRepository } from '../../interfaces/IUserRepository'

class MokUserRepository implements IUserRepository {
  public users: UserEntity[]

  constructor () {
    this.users = []
  }

  async create (user: UserEntity): Promise<UserEntity> {
    const newUser = new UserEntity(user)
    this.users.push(newUser)
    return newUser
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
      const idUser = this.users[i].email
      if (idUser === email) {
        return this.users[i]
      }
    }
  }

  async update (body: UserEntity): Promise<UserEntity | undefined> {
    return undefined
  }

  async delete (id: string): Promise<UserEntity | undefined> {
    return undefined
  }
}

export default MokUserRepository
