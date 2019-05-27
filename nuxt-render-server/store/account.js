import axios from "axios"

export const state = () => ({
    login:[],
    token: localStorage.getItem('token') || '',
})

//mutations: status of data
export const mutations = {

    login(state, token){
        state.token = token;
    }
}

export const getters = {
    loggedIn(state) {
        return state.token !== null
      }
}

//action: event element
export const actions = {
    
    // async login(context, credentials){
    //     return new Promise((resolve, reject) => {
            
    //         axios.post(`http://localhost:3001/login?email=${credentials.email}&password=${credentials.password}`)
    //           .then(response => {
    //             const token = response.data.access_token
    //             localStorage.setItem('access_token', token)
    //             context.commit('login', token)
    //             resolve(response)
    //             console.log(token);
    //           })
    //           .catch(error => {
    //             console.log(error)
    //             reject(error)
    //           })
    //         })
    // },
    async login(context, credentials){
        return new Promise((resolve, reject) => {
            
            axios.get('http://localhost:3001/login', {
                username: credentials.username,
                password: credentials.password,
              })
              .then(response => {
                console.log(response);
                const token = response.data.access_token;
                localStorage.setItem('access_token', token);
                context.commit('login', token);
                resolve(response);
              })
              .catch(error => {
                console.log(error)
                reject(error);
              })
            })
    }
}