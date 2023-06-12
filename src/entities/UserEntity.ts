import { uuid } from 'uuidv4'

class UserEntity {
  public readonly id: string | undefined

  public name: string
  public email: string
  public password: string

  constructor (data: Omit<UserEntity, 'id'>, id?: string) {
    this.name = data.name
    this.email = data.email
    this.password = data.password

    if (id === null || id === undefined) {
      this.id = uuid()
    }
  }
}

export default UserEntity
