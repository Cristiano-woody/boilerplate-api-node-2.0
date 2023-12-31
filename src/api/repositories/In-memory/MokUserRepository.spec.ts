import UserEntity from '../../entities/UserEntity'
import MokUserRepository from './MokUserRepository'

describe('Mok User Repository', () => {
  const mokUserRepository = new MokUserRepository()

  it('shold be able to create a user', async () => {
    const user = new UserEntity({ name: 'Johnf', email: 'john@example.com' })
    await expect(mokUserRepository.create(user)).resolves.not.toThrow()
  })

  it('shold be able to get a user by email', async () => {
    const user = new UserEntity({ name: 'John', email: 'john@example.com' })
    await mokUserRepository.create(user)
    const foundUser = await mokUserRepository.getUserByEmail(user.email)
    expect(foundUser).toBeInstanceOf(UserEntity)
  })

  it('shold be able to get a user by id', async () => {
    const user = new UserEntity({ name: 'John', email: 'john@example.com' })
    await mokUserRepository.create(user)
    if (user.id !== undefined) {
      const foundUser = await mokUserRepository.getUser(user.id)
      expect(foundUser).toBeInstanceOf(UserEntity)
    }
  })

  it('shold be able to get all users', async () => {
    const allUsers = await mokUserRepository.getAll()
    expect(Array.isArray(allUsers)).toBe(true)
  })
})
