import * as express from 'express'
import { type Router, type Request, type Response } from 'express'
import { type IUserController } from '../interfaces/IUserController'

class UserRoutes {
  readonly routes: Router
  constructor (readonly userController: IUserController) {
    //
    this.routes = express.Router()
    //
    this.routes.post('/user', (req: Request, res: Response) => { void userController.create(req, res) })
    //
    this.routes.get('/user', (req: Request, res: Response) => { void userController.getAll(req, res) })
    //
    this.routes.get('/user/:id', (req: Request, res: Response) => { void userController.getUser(req, res) })
    //
    this.routes.patch('/user/:id', (req: Request, res: Response) => { void userController.update(req, res) })
    //
    this.routes.delete('/user/:id', (req: Request, res: Response) => { void userController.delete(req, res) })
  }
}

export default UserRoutes
