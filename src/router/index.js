import express from 'express'

import Controller from '../controller'

const router = express.Router()

router.get('/highlights', Controller.getHighlights)

export default router
