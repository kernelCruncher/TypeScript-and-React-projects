import { Request, Response, NextFunction} from 'express'
import { controller, get, use } from './decorators'

//Middleware
function requireAuth(req: Request, res: Response, next: NextFunction):void {
    if (req.session && req.session.loggedIn){
        return next()
    }
    res.status(403)
    res.send('Not Permitted')
}


@controller('')
class RootController {
    @get('/')
    getRoot(req:Request, res:Response){
        if (req.session && req.session.loggedIn){
            res.send(`
            <div> 
                <div> You are logged in </div>
                <a href="/logout"> Logout </a>
            </div>`)
        }
        else{
            res.send(`
            <div> 
                <div> You are not logged in </div>
                <a href="/auth/login"> Login </a>
            </div>`)    
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response){
        res.send('Welcome to protected route, logged in user')
    }
}