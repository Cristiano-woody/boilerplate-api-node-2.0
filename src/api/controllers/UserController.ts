import type { Request, Response } from 'express'
import { type IUserController } from '../interfaces/IUserController'
import { type IUserService } from '../interfaces/IUserService'

class UserController implements IUserController {
  private readonly userService: IUserService

  constructor (UserService: IUserService) {
    this.userService = UserService
  }

  async create (req: Request, res: Response): Promise<Response> {
    try {
    
    } catch (err) {

    }
  }
}

export default UserController
