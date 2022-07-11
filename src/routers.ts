import { Router, Request, Response, NextFunction } from "express"

const router = Router()
router.get('/teste',(req: Request, res: Response, next: NextFunction) => {
    console.log('qq coisa')
})
export default router