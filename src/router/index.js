import express from 'express'

import Controller from '../controller'

const router = express.Router()

router.get('/games', Controller.getGame)
router.get('/games/console-game', Controller.getGameConsole)

export default router
