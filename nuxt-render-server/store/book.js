import {db} from '../plugins/firebaseConfig'

export const state = () => ({
    books: []
})

export const actions = {
    // bindBookRefs: firebaseAction (context => {
    //     return context.bindFirebaseRef('books', db.collection('books'))
    // })
}