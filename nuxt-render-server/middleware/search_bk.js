import axios from 'axios';

export default async function ({params, store}) {
    console.log('2');
    return await axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`);
    store.commit('add', response.data.results);
    console.log(response.data.results);
}