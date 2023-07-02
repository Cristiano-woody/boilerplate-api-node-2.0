import UserService from './UserService'
import MokUserRepository from '../repositories/In-memory/MokUserRepository'
import UserEntity from '../entities/UserEntity'
import UserValidator from '../validators/UserValidator'

describe('User Service', () => {
  const repository = new MokUserRepository()
  const userValidator = new UserValidator()
  const userService = new UserService(repository, userValidator)

  it('shold be able to create a user', async () => {
    const user = new UserEntity({ name: 'John', email: 'johnoe@gmail.com' })
    await expect(userService.create(user)).resolves.not.toThrow(new Error('Email is not valid'))
  })

  it('shold not be able to create a user with invalid email', async () => {
    const user = new UserEntity({ name: 'John', email: 'johnd oe@gmail.com' })
    await expect(userService.create(user)).rejects.toEqual(new Error('Email is not valid'))
  })
})
