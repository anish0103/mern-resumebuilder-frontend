import { LOGINSTATUS, LOGINUSER, CREATEUSER } from "../action/action"

const initialstate = {
    userData: [],
    isLogin: false
}

const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGINSTATUS:
            return { ...state, isLogin: action.data }
        case LOGINUSER:
            return { ...state, userData: action.data }
        case CREATEUSER:
            return { ...state, userData: action.data }
        default:
            return state
    }
}

export default Reducer;