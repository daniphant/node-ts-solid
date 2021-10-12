import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'
const router = Router()

const userRouter = Router()
userRouter.post('/create', (req, res) => {
  return createUserController.handle(req, res)
})

router.use('/users', userRouter)
export { router }
