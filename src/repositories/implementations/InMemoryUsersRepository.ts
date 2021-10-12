import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = []

  async findByEmail (email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null
  }

  async save (user: User): Promise<User> {
    this.users.push(user)
    return user
  }
}
