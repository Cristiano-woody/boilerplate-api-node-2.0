
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
    const user = this.users.filter(user => user.id === id)
    return user[0]
  }

  async getUserByEmail (email: string): Promise<UserEntity | undefined> {
    const user = this.users.filter(user => user.email === email)
    return user[0]
  }

  async update (body: UserEntity): Promise<void> {
    const user = this.users.filter(user => user.id === body.id)

    if (body.email !== undefined && body.email !== null) {
      user[0].email = body.email
    }
    if (body.name !== undefined && body.name !== null) {
      user[0].name = body.name
    }

    const users = this.users.filter(user => user.id !== body.id)
    this.users.push(user[0])
    this.users = users
  }

  async delete (id: string): Promise<void> {
    const users = this.users.filter(user => user.id !== id)
    this.users = users
  }
}

export default MokUserRepository
