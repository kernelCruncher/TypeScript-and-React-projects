import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'

//What is spread operator doing here? Actually it is a rest operator
//bodyValidator('email', 'address', 'name') works so that keys is just an array of string
//We don't know how many strings we're going to put in.
export function bodyValidator(...keys: string[]){
    return function(target: any, key: string, desc: PropertyDescriptor){
        Reflect.defineMetadata(MetadataKeys.validator, keys, target, key)
    }
}