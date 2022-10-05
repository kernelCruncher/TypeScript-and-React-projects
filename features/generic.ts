import { createModuleResolutionCache, isConstructorDeclaration } from "typescript"

class ArrayOfNumbers {
    constructor(public collection: number[]) {}
    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]){}

        get(index: number): string {
            return this.collection[index]
        }
    }
    
class ArrayOfAnything<T>{
    constructor(public collection: T[]){}

    get(index:number): T {
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c'])

const printStrings = <T,>(arr: T[]): void => {
    for (const i of arr) {
console.log(i)  }
}

//Generic constraints

class Car {
    print(){
        console.log('I am a car')
    }
}

class House {
    print( ){
        console.log('I am a house')
    }
}

interface Printable{
    print(): void
}
const printHousesOrCars = <T extends Printable, >(arr: T[]): void => {
    for (const x of arr){
        x.print()
     }
}

printHousesOrCars<House>([new House(), new House()])