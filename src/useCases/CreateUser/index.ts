import { InMemoryUsersRepository } from '../../repositories/implementations/InMemoryUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const usersRepository = new InMemoryUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  usersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
