import UserEntity from '../../entities/UserEntity'
import MokUserRepository from './MokUserRepository'

describe('Mok User Repository', () => {
  const mokUserRepository = new MokUserRepository()

  it('shold be able to create a user', async () => {
    const user = new UserEntity({ name: 'John', email: 'john@example.com' })
    const newUser = await mokUserRepository.create(user)
    expect(newUser).toBeInstanceOf(UserEntity)
    expect(newUser).toHaveProperty('id')
  })

  it('shold be able to get a user by email', async () => {
    const user = new UserEntity({ name: 'John', email: 'john@example.com' })
    await mokUserRepository.create(user)
    const foundUser = await mokUserRepository.getUserByEmail(user.email)
    expect(foundUser).toBeInstanceOf(UserEntity)
  })

  it('shold be able to get a user by id', async () => {
    const user = await mokUserRepository.create({ name: 'John', email: 'john@example.com', id: '1234test' })
    const foundUser = await mokUserRepository.getUserByEmail(user.email)
    expect(foundUser).toBeInstanceOf(UserEntity)
  })

  it('shold be able to get all users', async () => {
    const allUsers = await mokUserRepository.getAll()
    expect(Array.isArray(allUsers)).toBe(true)
  })
})
