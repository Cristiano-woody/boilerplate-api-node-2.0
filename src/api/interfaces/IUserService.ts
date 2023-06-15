import { type Request } from 'express'
import type UserEntity from '../entities/UserEntity'

export interface IUserService {
  create: (req: Request) => Promise<void>
  getUser: (req: Request) => Promise<UserEntity | undefined>
  getAll: () => Promise<UserEntity[] | undefined>
  update: (req: Request) => Promise<void>
  delete: (req: Request) => Promise<void>
}
