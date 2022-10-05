/// <reference types="@types/google.maps" />
import { CustomMap} from './CustomMap'
import { User } from './User'
import { Company } from './Company'

const customMap = new CustomMap('map')
const user = new User()
const company = new Company()
customMap.addMarker(user)
customMap.addMarker(company)

// import { User } from "./User"
// import { Company } from "./Company"

// const user = new User()

// console.log(user)

// const company = new Company()
// console.log(company)
