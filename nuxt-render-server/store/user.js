//import file config connect
import {fetchApi, addApi, editApi, deleteApi, getApiById, searchApi} from '../plugins/user'
import {db} from '../plugins/firebaseConfig'

//init data
export const state = () => ({
    users:[],
    user: {},
})

//mutations: status of data
export const mutations = {
    fetch(state, { users }){
        return state.users = users;
    },
    getUserById(state, {user}){
        return state.user = user;
        console.log(state.user);
    },
    editUser(state, {user}){
        return state.user = user;
    },
    searchUser(state, {users}){
        console.log(users.length);
        return state.users = users;
    }
}

//action: event element
export const actions = {
    //load data
    async getUsers({commit}, data = {}){
        // let res = await fetchApi(data);
        let users = [];
        db.collection('users').onSnapshot((snapshot) => {
            users = [];
            snapshot.forEach((doc) => {
              users.push({id:doc.id, username: doc.data().username});
              console.log(users);
            })
        });
        // console.log('ssgsg' + res);
        // console.log(users);
        return commit('fetch', {users: users});
    },
    //getUser by Id
    async getUserById({commit}, data = {}){
        let res = await getApiById(data);
        return commit('getUserById', {user:res.data});
    },
    //add User
    async addUser({commit}, data = {}){
        let res = await addApi(data);
        return res;
    },
    //edit User
    async editUser({commit}, data){
        let res = await editApi(data.id, data);
        return commit('editUser',{user:res.data});
    },
    //delete User
    async deleteUser({commit}, data) {
        let res = await deleteApi(data);
        return res;
    },
    //search User
    async searchUser({commit}, data = {}){
        console.log(data["username"]);
        console.log(data["email"]);
        let res = await fetchApi(data);
        let users = res.data;

        let results = [];
        for(var i = 0; i < users.length; i++){
            var user = users[i];

            for (var key in user){

                if(data["username"] === '' && data["email"] === ''){
                    results.push(user);
                }else if(data["username"] != '' && data["email"] === ''){
                    if(user["username"].toString().includes(data["username"])){
                        results.push(user);
                    }
                }else if(data["username"] === '' && data["email"] != ''){
                    if(user["email"].toString().includes(data["email"])){
                        results.push(user);
                    }
                }else if(data["username"] != '' && data["email"] != ''){
                    if(user["username"].toString().includes(data["username"])){
                        if(user["email"].toString().includes(data["email"])){
                            results.push(user);
                        }else{
                            results = [];
                        }
                    }
                }
            }
        }

        var uniqueArray = removeDuplicates(results, "id");
        // console.log(uniqueArray);
        console.log(uniqueArray.length);
        return commit('searchUser', {users:uniqueArray});
        // return res;
    }

}

function removeDuplicates(originalArray, prop) {

    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}



