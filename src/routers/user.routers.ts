import { Router } from "express"
import { userGet } from "../controllers/user.controller"

const UserApi= Router()

UserApi.get('/teste', userGet)

export default UserApi