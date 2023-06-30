import UserRepository from './repositories/UserRepository'
import UserService from './services/UserService'
import UserController from './controllers/UserController'
import UserRoutes from './routes/UserRoutes'
import UserValidator from './validators/UserValidator'
// import MokUserRepository from './api/repositories/MokUserRepository'

// instanciando as classes e injetando dependencias
const CreateUserRepository = new UserRepository()
// const CreateMokUserRepository = new MokUserRepository()
const userValidator = new UserValidator()
const CreateUserService = new UserService(CreateUserRepository, userValidator)
const CreateUserController = new UserController(CreateUserService)
const CreateUserRoutes = new UserRoutes(CreateUserController)

const userRoutes = CreateUserRoutes.routes

export { userRoutes }
