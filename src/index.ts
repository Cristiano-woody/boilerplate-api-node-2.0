import UserRepository from './api/repositories/UserRepository'
import UserService from './api/services/UserService'
import UserController from './api/controllers/UserController'
import UserRoutes from './api/routes/UserRoutes'
// import MokUserRepository from './api/repositories/MokUserRepository'

// instanciando as classes e injetando dependencias
const CreateUserRepository = new UserRepository()
// const CreateMokUserRepository = new MokUserRepository()
const CreateUserService = new UserService(CreateUserRepository)
const CreateUserController = new UserController(CreateUserService)
const CreateUserRoutes = new UserRoutes(CreateUserController)

const routes = CreateUserRoutes.routes

export { routes }
