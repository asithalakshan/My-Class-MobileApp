import * as Action from '../actions/userAction'

const initState = {
    
    userId: {},
    
}

const userReducer = (state = initState, {type, payload}) => {
    switch (type){

        case Action.LOGIN_SUCCESS: {
            return {
                ...state, 
                userId: payload,
                
            }
        }

        
        
        default: return state
    }
}

export default userReducer