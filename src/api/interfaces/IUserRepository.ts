import type UserEntity from '../entities/UserEntity'

export interface IUserRepository {
  create: (user: UserEntity) => Promise<void>
  getUser: (id: string) => Promise<UserEntity | null>
  getAll: () => Promise<UserEntity[] | null>
  update: (body: UserEntity) => Promise<UserEntity | null>
  delete: (id: string) => Promise<UserEntity | null>
}
