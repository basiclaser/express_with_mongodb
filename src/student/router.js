
import { Router } from "express"
import {postStudent,getStudent,putStudent} from "./contoller"

const router = new Router()

router.post("/", postStudent)
router.get("/", getStudent)
router.put("/:id", putStudent)

export default router;