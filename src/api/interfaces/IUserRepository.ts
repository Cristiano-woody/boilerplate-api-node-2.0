import type UserEntity from '../entities/UserEntity'

export interface IUserRepository {
  create: (user: UserEntity) => Promise<UserEntity | undefined>
  getUser: (id: string) => Promise<UserEntity | undefined>
  getAll: () => Promise<UserEntity[]>
  update: (body: UserEntity) => Promise<UserEntity | undefined>
  delete: (id: string) => Promise<UserEntity | undefined>
}
