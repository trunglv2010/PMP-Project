<template>
    <div id="test" class="container">

        <table>
            <thead>
                <tr>
                    <th>
                        title
                    </th>
                    <th>
                        author
                    </th>
                    <th>
                        url
                    </th>
                </tr>
            </thead>
            <tbody>
                {{books}}
                <tr v-for="(book, index) in books" :key="index">
                    <td>
                        {{book.title}}
                    </td>
                    <td>
                        {{book.author}}
                    </td>
                    <td>
                        {{book.url}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {db} from '../plugins/firebaseConfig';
let booksRef = db.ref('books');

// db.ref('books').once('value', snapshot => {
//     bookRef = snapshot.val();
//     console.log(bookRef);
// });
console.log(booksRef);
export default {
    data(){
        return {
            books: []
        }
    },
    // firestore: {
    //     books: db.collection('books')
    // }
    firebase: {
        books: booksRef
    }
}
</script>
