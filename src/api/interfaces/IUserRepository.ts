import type UserEntity from '../entities/UserEntity'

export interface IUserrepository {
  create: (user: UserEntity) => Promise<void>
  getUser: (id: string) => Promise<UserEntity | null>
  getAll: () => Promise<UserEntity[] | null>
  update: (id: string) => Promise<UserEntity | null>
  delete: (id: string) => Promise<UserEntity | null>
}
