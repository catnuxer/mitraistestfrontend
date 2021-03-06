import {
    SET_STATE_REGISTRATION,
    SET_DOB_STATE_REGISTRATION,
    SHOW_LOGIN_BUTTON_REGISTRATION,
    HIDE_LOGIN_BUTTON_REGISTRATION,
    SUCCESS_REGISTRATION,
    SET_IS_FETCHING_API
} from '../constant/Registration'

const initState = {
    mobileNumber : '',
    firstName: '',
    lastName: '',
    dob: {
        day: '',
        month: '',
        year: '',
    },
    gender: 2, //0: Female, 1: Male
    email: '',
    showLoginButton: false,
    isRegistered: false,
    isFetchingApi: false
}

/**
 * Reducers Registration to do manage the state
 * of registration page
 * @param {Object} state 
 * @param {Function} action 
 */
export default function Registration(state = initState, action) {
    switch (action.type) {
        case SET_STATE_REGISTRATION:
            const { keyState, valState } = action.payload
            const newState = {...state}
            newState[keyState] = valState
            return {
                ...state,
                ...newState
            }
        
        case SET_DOB_STATE_REGISTRATION:
            const { keyDob, valDob } = action.payload
            const dobState = {...state.dob}
            dobState[keyDob] = valDob
            return {
                ...state,
                dob: {...dobState}
            }

        case SHOW_LOGIN_BUTTON_REGISTRATION:
            return {
                ...state,
                showLoginButton: true
            }
        
        case HIDE_LOGIN_BUTTON_REGISTRATION:
            return {
                ...state,
                showLoginButton: false
            }
            
        case SUCCESS_REGISTRATION:
            return {
                ...initState,
                isRegistered: true
            }
        case SET_IS_FETCHING_API:
            const {statusFetch} = action.payload
            return {
                ...state,
                isFetchingApi: statusFetch
            }
        default:
            return state
    }
}