import { Router } from 'express'
import { index, store, show, update, destroy } from '../controllers/goalsController.js'


const router = Router()

router.route('/')
    .get(index)
    .post(store)

router.route('/:goalId')
    .get(show)
    .put(update)
    .delete(destroy)


export default router
