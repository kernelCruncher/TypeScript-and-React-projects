const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//This is a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40]


//use type alias
type Drink = [string, boolean, number]
const sprite: Drink = ['brown', true, 40]

const carSpecs: [number, number] = [400, 3354]