import type UserEntity from '../entities/UserEntity'

export interface IUserService {
  create: (user: UserEntity) => Promise<void>
  getUser: (id: string) => Promise<UserEntity | null>
  getAll: () => Promise<UserEntity[] | undefined>
  update: (id: string, data: UserEntity) => Promise<void>
  delete: (id: string) => Promise<void>
}
