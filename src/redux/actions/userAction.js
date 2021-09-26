import Constants from '../../../util/Contstants';


export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const LOGIN_SET_USER = 'LOGIN_SET_USER'

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'



export const signIn = (userId) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userId,
    }
}

export const setNextClinic = (clinicdata) => {
    return {
        type: NEXT_CLINIC,
        payload: clinicdata,
    }
}

export const setPastClinic = (clinicdata) => {
    return {
        type: PAST_CLINIC,
        payload: clinicdata,
    }
}

export const setReport = (reportdata) => {
    return {
        type: REPORT,
        payload: reportdata,
    }
}







