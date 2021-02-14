import express from 'express'

import Controller from '../controller'

const router = express.Router()

router.get('/games', Controller.getGame)
router.get('/games/console-game', Controller.getGameConsole)

router.get('/detail/:year/:month/:day/:key', Controller.getDetail)

export default router
