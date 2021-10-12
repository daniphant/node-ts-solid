import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'
const router = Router()

const userRouter = Router()

userRouter.post('/create', createUserController.handle)

router.use('/users', userRouter)

export { router }
