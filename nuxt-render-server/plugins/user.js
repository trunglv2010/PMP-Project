import axios from "./axios";
// import firebase from '../plugins/firebaseConfig';
import { error } from "util";
const URL = '/users';

export function fetchApi(params = {}){
    return axios.get(URL);
}

// export function fetchApi(params = {}){
//     // console.log(firebase.database.ref('users'));
//     return firebase.database.ref('users');
// }


export function addApi(params = {}){
    return axios.post(URL, params)
    .then(response => response)
    .catch(error => {
        console.log(error);
    })
}

export function editApi(id, params) {
    console.log(id + params);
    return axios.put(`${URL}/${id}`, params)
    .then(response => response)
    .catch(error => {
        console.log(error);
    })
}

export function deleteApi(id) {
    return axios.delete(`${URL}/${id}`)
    .then(response => response)
    .catch(error => {
      console.log(error);
    })
}

export function getApiById(id) {
    console.log(id);
    return axios.get(`${URL}/${id}`)
    .then(response => response)
    .catch(error => {
      console.log(error);
    })
}

export function loginApi(params = {}){
    console.log(params);
    return axios.get(`/login?email=${params.email}&password=${params.password}`)
    .then(response => response)
    .catch(error => {
        throw error;
        console.log(error);
    })
}

export function searchApi(username) {

   var users = [];
   return axios.get(URL).then(response => {
    users = response.data;
    let results = [];
    for(var i = 0; i < users.length; i++){
        var user = users[i];
        for (var key in user){
            if(key === "username"){
                if(user[key].toString().includes(username)){
                    // console.log(obj[key].toString());
                    console.log(response.data);
                    response;
                    results.push(user);
                    //users = response.data;
                }
            }
        }
    }
    return results;
    }).catch(e => {
      this.errors.push(e)
    })
}
