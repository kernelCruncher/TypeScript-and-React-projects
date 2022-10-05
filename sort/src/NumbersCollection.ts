import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter{
    constructor (public data: number[]) {
        super()
    }
    
    //get means we don't have to invoke length as a function.
    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = leftHand
    }
}