import { uuid } from 'uuidv4'

class UserEntity {
  public readonly id?: string

  public name: string
  public email: string

  constructor (data: UserEntity) {
    this.name = data.name
    this.email = data.email
    this.id = uuid()
  }
}

export default UserEntity
