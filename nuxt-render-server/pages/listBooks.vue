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
import Vue from 'vue';
import {rtdbPlugin} from 'vuefire';

Vue.use(rtdbPlugin);

import {db} from '../plugins/firebaseConfig';

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
        books: db.ref('books'),
        
    }
}
</script>
