import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";
import { UserEdit } from "./views/UserEdit";

// const users = new Collection('http://localhost:3000/users', 
// (json: UserProps) => {
//     return User.buildUser(json)
// })

// users.on('change', () => {
//     const root = document.getElementById('root')

//     if (root) {
//         new UserList(root, users).render()
//     }
// })

// users.fetch()

const user = User.buildUser({ name: 'NAME', age: 20})

const root = document.getElementById('root')

if (root) {
    const userEdit = new UserEdit(root, user)
    
    userEdit.render()

    // const userForm = new UserForm(
    //     root,
    //     user
    // )
    
    // userForm.render()
    
} else {
    throw new Error('Root element not found')
}


// const collection = User.buildUserCollection()

// collection.on('change', () => {
//     console.log(collection)
// })

// collection.fetch()

// user.set({ name: 'New Name', age: 9999})

//user.save()

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