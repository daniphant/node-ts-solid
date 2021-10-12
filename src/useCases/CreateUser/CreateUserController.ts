import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor (
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body

      const user = await this.createUserUseCase.execute({ name, email, password })

      return res.status(201).send({
        error: '',
        payload: user
      })
    } catch (err) {
      return res.status(400).send({
        error: err?.message ?? 'Unknown error',
        payload: ''
      })
    }
  }
}
