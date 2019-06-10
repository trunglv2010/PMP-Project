import axios from 'axios';

export const state = () => ({
    albums: []
})

export const mutations = {
    fetch (state, albums) {
        console.log('4');
        state.albums = albums;
    }
}

export const actions = {
    async getAlbums({commit}, data = {}){
        console.log('3');
        let response = await axios.get(`https://itunes.apple.com/search?term=${data}&entity=album`);
        console.log(response.data.results);
        return commit('fetch', response.data.results);
    }
}