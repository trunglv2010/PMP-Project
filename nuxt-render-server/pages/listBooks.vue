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
import {db, booksRef} from '../plugins/firebaseConfig';

console.log("sgssgsg"+ booksRef);
export default {
    name:'test',
    firebase: {
            books: booksRef
    },
    data() {
        return {
            newBook: {
                title: '',
                author: '',
                url: ''    
            }
        }
    }
    // firebase: {
    //     books: booksRef
    // }
}
</script>
