import { User } from './models/User'

const user = new User({ id: 1})

user.set({ name: 'New Name', age: 9999})

user.save()

// user.fetch()

// setTimeout(() => {
//     console.log(user)
// }, 400)

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// })

// axios.get('http://localhost:3000/users/1')

// import { User } from "./models/User";

// const user = new User({ name: 'myname', age: 20})

// user.set({ name: 'newname', age: 9999})

// console.log(user.get('name'))
// console.log(user.get('age'))

// user.on('change', () => {
//     console.log('Change #1')
// })
// user.on('change', () => {
//     console.log('Change #2')
// })
// user.on('save', () => {
//     console.log('Save was triggered')
// })

// user.trigger('change')