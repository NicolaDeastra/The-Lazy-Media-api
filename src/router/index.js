import express from 'express'

import Controller from '../controller'

const router = express.Router()

router.get('/games', Controller.getGame)
router.get('/games/console-game', Controller.getConsole)
router.get('/games/e-sport/', Controller.getESport)
router.get('/games/news', Controller.getGameNews)
router.get('/games/lazy-talk', Controller.getLazyTalk)
router.get('/games/pc', Controller.getPc)
router.get('/games/review', Controller.getGameReview)

router.get('/detail/:year/:month/:day/:key', Controller.getDetail)

export default router
