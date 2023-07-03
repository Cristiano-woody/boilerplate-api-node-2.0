import UserService from './UserService'
import MokUserRepository from '../repositories/In-memory/MokUserRepository'
import UserEntity from '../entities/UserEntity'
import UserValidator from '../validators/UserValidator'

describe('User Service', () => {
  const repository = new MokUserRepository()
  const userValidator = new UserValidator()
  const userService = new UserService(repository, userValidator)

  // method createUser
  it('shold be able to create a user', async () => {
    const user = new UserEntity({ name: 'John', email: 'johnoe@gmail.com' })
    await expect(userService.create(user)).resolves.not.toThrow()
  })
  it('shold not be able to create a user with invalid email', async () => {
    const user = new UserEntity({ name: 'John', email: 'johnd oe@gmail.com' })
    await expect(userService.create(user)).rejects.toEqual(new Error('Email is not valid'))
  })
  // method get User By Id
  it('shold be able to get a user by id', async () => {
    const newUser = new UserEntity({ name: 'John', email: 'eujohnd@gmail.com' })
    await userService.create(newUser)
    if (newUser.id !== undefined) {
      const user = await userService.getUser(newUser.id)
      expect(user).toBeInstanceOf(UserEntity)
    }
  })
  it('shold not be able to get a user by id', async () => {
    await expect(userService.getUser('iderror')).rejects.toEqual(new Error('User iderror does not exist'))
  })
})
