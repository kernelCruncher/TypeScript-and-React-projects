type Callback = () => void

export class Eventing {
    events: {[key:string]: Callback[]} = {} // object with keys that are strings with values that are an array of callbacks
    on(eventName:string, callback: Callback):void {
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }
    trigger(eventName: string): void {
        const handlers = this.events[eventName]

        if (!handlers || handlers.length === 0) {
            return
        }

        handlers.forEach(callback => {
            callback()
        })
    }

}