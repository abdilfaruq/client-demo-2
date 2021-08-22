import {
    REQUEST_USER_DATA_SUCCESS,
    REQUEST_USER_DATA_FAILED,
    REG_INPUT_EMAIL,
    REG_INPUT_FIRST_NAME,
    REG_INPUT_LAST_NAME,
    REG_INPUT_PASSWORD,
    REG_SUCCESS,
    REG_FAILED,
    REG_LOADING,
    SET_EMAIL,
    SET_PASSWORD,
    USER_LOGOUT
} from './constants';
import Axios from 'axios';
import { store } from '../index';

export const setEmail = (text) => ({
    type: SET_EMAIL,
    payload: text
})

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password
})

export const inputRegFirstName = (text) => ({
    type: REG_INPUT_FIRST_NAME,
    payload: text
})

export const inputRegLastName = (text) => ({
    type: REG_INPUT_LAST_NAME,
    payload: text
})

export const inputRegEmail = (email) => ({
    type: REG_INPUT_EMAIL,
    payload: email
})

export const inputRegPassword = (password) => ({
    type: REG_INPUT_PASSWORD,
    payload: password
})

export const registerUser = () => async (dispatch) => {
    let data = await Axios({
        method: 'POST',
        data: {
            firstName: store.getState().inputRegisterDetails.firstName,
            lastName: store.getState().inputRegisterDetails.lastName,
            email: store.getState().inputRegisterDetails.email,
            password: store.getState().inputRegisterDetails.password
        },
        withCredentials: true,
        url: "http://localhost:5000/users/register"
        })
    let resp = await data;
    dispatch({
        type: REG_LOADING, payload: true
    })
    if (resp.message === "Registration successful") {
        dispatch({
            type: REG_SUCCESS, payload: resp.message
        });
        dispatch({
            type: REG_LOADING, payload: false 
        })
    } else {
        dispatch({
            type: REG_FAILED, payload: resp.message
        });
        dispatch({
            type: REG_LOADING, payload: false
        })
    }

}

export const logoutUser = () => async (dispatch) => {
    let logout = await localStorage.removeItem('linguo-state.requestUserData');
    let resp = await logout;
    try {
        dispatch({
            type: USER_LOGOUT, payload: resp
        })
    } catch (err) {
        console.log(err);
    }
}

export const requestUserData = () => async (dispatch) => {
    let data = await Axios({
        method: "POST",
        data: {
            email: store.getState().inputLoginDetails.email,
            password: store.getState().inputLoginDetails.password,
        },
        withCredentials: true,
        url: "http://localhost:5000/users/authenticate",
        });
    let resp = await data;
    if (resp.data.id) {
        dispatch({
            type: REQUEST_USER_DATA_SUCCESS, payload: resp.data
        })
    } else {
        dispatch({
            type: REQUEST_USER_DATA_FAILED, payload: 'Incorrect email or password'
        })
    }
}