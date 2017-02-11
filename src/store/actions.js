// import api from '../api/Rest-api.js'
// import * as types from './types'

// export const UserLogin = ({ commit }, data) => {
//     api.login(data).then(function(response) {
//             if (response.data.type == true) {
//                 commit(USER_SIGNIN, response.data.token);
//                 window.location = '/person'
//             } else {
//                 window.location = '/login'
//             }
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
// };