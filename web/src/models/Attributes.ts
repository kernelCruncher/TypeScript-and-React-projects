export class Attributes<T extends {}> {
        
    constructor(private data: T) {}

    //K 'extends keyof' T means K can 
    //only be one of the keys of T
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key]
    }

    set (update: T):void {
        Object.assign(this.data, update)
    }

    getAll(): T {
        return this.data
    }
}