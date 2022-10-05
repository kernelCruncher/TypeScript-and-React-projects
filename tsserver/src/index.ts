import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import './controllers/LoginController'
import './controllers/RouteController'

import { AppRouter } from './AppRouter'

const app = express()

//what does body parser do?
//adds on body property to http request
app.use(bodyParser.urlencoded({ extended: true}))

//adds in session
//value for keys don't matter. Just has to be array of strings when defining.
app.use(cookieSession({ keys: ['laskdjf']}))

app.use(AppRouter.getInstance())

//this is our server listening  on pprt 3000
app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})
