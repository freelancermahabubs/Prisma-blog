import express, { Request, Response } from 'express'
const router = express.Router()
router.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    console.log('create post')
    res.json({
        success: true,
        message: "User created successfully"
    })
})

export const userRoutes  = router