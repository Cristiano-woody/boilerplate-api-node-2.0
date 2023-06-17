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
      await this.userService.create(req.body.user)
      return res.status(201).send('user created successfully')
    } catch (err) {
      return res.status(400).send(err)
    }
  }

  async getUser (req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userService.getUser(req.params.id)
      return res.status(200).json(user)
    } catch (err) {
      return res.status(400).send(err)
    }
  }

  async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const allUsers = await this.userService.getAll()
      return res.status(200).json(allUsers)
    } catch (err) {
      return res.status(400).send(err)
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    try {
      await this.userService.update(req.params.id, req.body.data)
      return res.status(200).send('user updated successfully')
    } catch (err) {
      return res.status(400).send(err)
    }
  }

  async delete (req: Request, res: Response): Promise<Response> {
    try {
      await this.userService.delete(req.params.id)
      return res.status(200).send('user deleted successfully')
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}

export default UserController
