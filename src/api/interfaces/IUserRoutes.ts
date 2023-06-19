import { type Router } from 'express'
import { type IUserController } from './IUserController'

export interface IUserRutes {
  readonly routes: Router
  readonly userController: IUserController
}
