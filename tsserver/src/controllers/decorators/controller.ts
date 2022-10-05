import 'reflect-metadata'
import { Request, Response, NextFunction, RequestHandler } from 'express'
import { AppRouter } from '../../AppRouter'
import { Methods } from './Methods'
import { MetadataKeys } from './MetadataKeys'

function bodyValidators(keys: string): RequestHandler{
    return function(req: Request, res: Response, next: NextFunction){
        if (!req.body) {
            res.status(422).send('Invalid request')
            return
        }

        for (let key of keys){
            if (!req.body[key]){
                res.status(422).send(`Missing property ${key}`)
                return
            }
        }
        next()
    }
}

//This is where the router method from express is configured to actually set up all the endpoints.
export function controller(routePrefix: string){
    //decorators on classes return a different kind of function
    return function(target: Function){
        const router = AppRouter.getInstance()
        //Each keys will be a method in the class, i.e. get(), post()
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key)
            const middlewares = Reflect.getMetadata(
                MetadataKeys.middleware,
                target.prototype,
                key
            ) || []
        const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || []  
        const validator = bodyValidators(requiredBodyProps)
        //Here is where we add the methods in the class to the Router and the express server is started.
        if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler)
        }
        }
    }
}

