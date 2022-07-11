import { Router, Request, Response, NextFunction } from "express"
import UserApi from "./routers/user.routers"

const router = Router()

router.use('/v1', UserApi)

export default router