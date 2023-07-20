import express, { Application, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()
const hostname: string = process.env.HOSTNAME || 'localhost'
const port: string = process.env.PORT || '3000'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_: Request, res: Response) => {
    res.status(200).send('coucou')
})

app.use('/*', (_: Request, res: Response, next: NextFunction) => {
    res.status(200).send("Cette page n'existe pas")
    next()
})

app.use((err: Error, _: Request, __: Response, ___: NextFunction) => {
    console.log(err.stack)
})

app.listen(port, () => {
    console.log(`Connected to http://${hostname}:${port}`)
})
