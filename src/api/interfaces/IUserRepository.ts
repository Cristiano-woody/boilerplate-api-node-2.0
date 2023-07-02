import type UserEntity from '../entities/UserEntity'

export interface IUserRepository {
  create: (user: UserEntity) => Promise<void>
  getUser: (id: string) => Promise<UserEntity | undefined>
  getUserByEmail: (email: string) => Promise<UserEntity | undefined>
  getAll: () => Promise<UserEntity[]>
  update: (body: UserEntity) => Promise<void>
  delete: (id: string) => Promise<void>
}
