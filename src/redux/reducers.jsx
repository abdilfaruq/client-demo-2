import {
    REQUEST_USER_DATA_SUCCESS,
    REQUEST_USER_DATA_FAILED,
    REG_INPUT_FIRST_NAME,
    REG_INPUT_LAST_NAME,
    REG_INPUT_EMAIL,
    REG_INPUT_PASSWORD,
    USER_LOGOUT,
    SET_EMAIL,
    SET_PASSWORD,
    REG_SUCCESS,
    REG_FAILED,
    REG_LOADING
} from './constants';

const initialLoginDetails = {
    email: '',
    password: ''
}

export const inputLoginDetails = (state=initialLoginDetails, action={}) => {
    switch(action.type) {
        case SET_EMAIL:
            return Object.assign({}, state, { email: action.payload })
        case SET_PASSWORD:
            return Object.assign({}, state, { password: action.payload })
        default:
            return state;
    }
}

const initialRegisterValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

export const inputRegisterDetails = (state=initialRegisterValues, action={}) => {
    switch(action.type) {
        case REG_INPUT_FIRST_NAME:
            return Object.assign({}, state, { firstName: action.payload })
        case REG_INPUT_LAST_NAME:
            return Object.assign({}, state, { lastName: action.payload  })
        case REG_INPUT_EMAIL:
            return Object.assign({}, state, { email: action.payload  })
        case REG_INPUT_PASSWORD:
            return Object.assign({}, state, { password: action.payload })
        default:
            return state;
    }
}

const initialRegisterSubmit = {
    success: '',
    error: '',
    loading: ''
}

export const submitRegisterDetails = (state=initialRegisterSubmit, action={}) => {
    switch(action.type) {
        case REG_SUCCESS:
            return Object.assign({}, state, { success: action.payload })
        case REG_LOADING:
            return Object.assign({}, state, { loading: action.payload })
        case REG_FAILED:
            return Object.assign({}, state, { error: action.payload })
        default: 
            return state;
    }
}

const initialUserDataState = {
    isAuthenticated: localStorage.getItem('isAuthenticated')?true:false,
    userData: localStorage.getItem('user'),
    error: ''
}

export const requestUserData = (state=initialUserDataState, action={}) => {
    switch(action.type) {
        case REQUEST_USER_DATA_SUCCESS:
            return Object.assign({}, state, { isAuthenticated: true, userData: action.payload, error: '' })
        case REQUEST_USER_DATA_FAILED:
            return Object.assign({}, state, { isAuthenticated: false, error: action.payload })
        case USER_LOGOUT:
            return Object.assign({}, state, { userData: action.payload, isAuthenticated: false, error: '' })
        default:
            return state;
    }
}