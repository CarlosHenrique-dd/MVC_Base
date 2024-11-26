import { Router } from 'express'
import type { Request, Response } from 'express'
import StatusCheckController from '../controller/statusCheck'
import { adapt } from './adapter/express-adapter'

const router = Router()

router.get('/', adapt(StatusCheckController))
router.post('/', (req: Request, res: Response) => {})

export default router
