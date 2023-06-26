
import type UserEntity from '../../entities/UserEntity'
// import { type IUserRepository } from '../../interfaces/IUserRepository'

class MokUserRepository {
  public users: UserEntity[]

  constructor () {
    this.users = []
  }

  async create (user: UserEntity): Promise<UserEntity> {
    this.users.push(user)
    return user
  }

  async getAll (): Promise<UserEntity[] | null> {
    return this.users
  }

  async getUser (id: string): Promise<UserEntity | null> {
    for (let i = 0; i <= this.users.length; i++) {
      const idUser = this.users[i].id
      if (idUser === id) {
        return this.users[i]
      }
    }
    return null
  }

  async getUserByEmail (email: string): Promise<UserEntity | null> {
    for (let i = 0; i <= this.users.length; i++) {
      const idUser = this.users[i].email
      if (idUser === email) {
        return this.users[i]
      }
    }
    return null
  }

  async update (body: UserEntity): Promise<UserEntity | null> {
    return null
  }

  async delete (id: string): Promise<UserEntity | null> {
    return null
  }
}

export default MokUserRepository
