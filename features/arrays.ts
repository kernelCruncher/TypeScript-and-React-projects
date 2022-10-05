const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

const car = carMakers[0]
const myCar = carMakers.pop()

//carMakers.push(100) --Fails

carMakers.map((car: string): string => {
    return car.toUpperCase()
})

const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-02')
//importantDates.push(100) --Fails

