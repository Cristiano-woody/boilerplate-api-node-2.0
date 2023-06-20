import { type Router } from 'express'
import { type IUserController } from './IUserController'

export interface IUserRoutes {
  readonly routes: Router
  readonly userController: IUserController
}
