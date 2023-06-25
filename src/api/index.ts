import UserRepository from './repositories/UserRepository'
import UserService from './services/UserService'
import UserController from './controllers/UserController'
import UserRoutes from './routes/UserRoutes'
// import MokUserRepository from './api/repositories/MokUserRepository'

// instanciando as classes e injetando dependencias
const CreateUserRepository = new UserRepository()
// const CreateMokUserRepository = new MokUserRepository()
const CreateUserService = new UserService(CreateUserRepository)
const CreateUserController = new UserController(CreateUserService)
const CreateUserRoutes = new UserRoutes(CreateUserController)

const userRoutes = CreateUserRoutes.routes

export { userRoutes }
