class Boat {
    color: string = 'red'

    get formattedColor(): string {
        return `This boats color is ${this.color}`
    }

    @logError('Boat is sunk')
    pilot(): void {
        throw new Error()
        console.log('swish')
    }
}

function testDecorator(target: any, key: string): void {
    console.log('Target:', target)
    console.log('Key:', key)
}

function logError(errorMessage: string){
return function (target:any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
    desc.value = function(){
        try{
            method()
        } catch (e){
            console.log('OOps, boat was sunk')
        }
    }
}
}

new Boat().pilot()