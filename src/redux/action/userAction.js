const REGISTER_USER = 'REGISTER_USER';
const REGISTER_ERROR = 'REGISTER_ERROR';

import axios from 'axios';


const submittUserDetailsAPI = () => {
    return axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCepu-FJTeAvbO2oVMNn5VoUN8am751nXc',
        data: {
            
        }
    })
}

const submittUserDetails = () => dispatch => {
    submittUserDetailsAPI().then((response) => {
        dispatch({
            type: REGISTER_USER,
            response
        })

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