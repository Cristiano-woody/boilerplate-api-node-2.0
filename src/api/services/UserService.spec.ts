import UserService from './UserService'
import MokUserRepository from '../repositories/In-memory/MokUserRepository'
import UserEntity from '../entities/UserEntity'

describe('User Service', () => {
  const repository = new MokUserRepository()
  const userService = new UserService(repository)

  it('shold be able to create a user', async () => {
    const user = await userService.create({ name: 'John', email: 'john doe@gmail.com' })
    expect(user).toHaveProperty('id')
    expect(user).toBeInstanceOf(UserEntity)
  })
})
