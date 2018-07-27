const REGISTER_USER = 'REGISTER_USER';
const REGISTER_ERROR = 'REGISTER_ERROR';

import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import firebase from 'firebase'



const submittUserDetailsAPI = (userDetails) => {

//     var database = firebase.database();
//      console.log("VARIIII-------")
//     console.log("VARIIII-------",database)


//     // firebase.database().ref('users/employee').set(
//     //     userDetails
//     // );


// return firebase.database().ref('RXapp/user/employee/data').push(
//    userDetails
// )




//    return  firebase.database().ref('users/employee').push(
//         userDetails
//     );


     firebase.database().ref('RXapp/user/employee/data').on(
        'value',snapshot=>{
            console.log('************', snapshot.val())
        }
    );


    // return axios({
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     url: 'https://rxapphealth.firebaseio.com/data/userset/user/.json',
    //     data: userDetails  
    // })
}

const submittUserDetails = (userDetails) => dispatch => {
    submittUserDetailsAPI(userDetails).then((response) => {
        dispatch({
            type: REGISTER_USER,
            response
        })
        dispatch(Snackbar.show({
            title: 'Form Submitted Sucessfully',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:'green'
        }))

    }).catch(err => {
        dispatch({
            type: REGISTER_ERROR,
            err
        }) 
    });

}

export {
    submittUserDetails
}