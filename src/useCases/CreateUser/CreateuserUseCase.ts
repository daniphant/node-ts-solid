import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { CreateUserDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository
  ) {}

  async execute (data: CreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = new User(data)

    return await this.usersRepository.save(user)
  }
}
