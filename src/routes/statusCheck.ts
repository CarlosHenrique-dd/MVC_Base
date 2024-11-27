import { type Request, type Response, Router } from 'express'
import { adapt } from '../abstract'
import StatusCheckController from '../controller/statusCheck'

const router = Router()

router.get('/', adapt(StatusCheckController))

export default router
