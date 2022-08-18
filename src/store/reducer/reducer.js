import { LOGINSTATUS, LOGINUSER, CREATEUSER, GETUSERBYID, UPDATEUSERINFORMATION, CHOOSETEMPLATE, RESETVIEWCOUNT } from "../action/action"

const initialstate = {
    userData: [],
    isLogin: false
}

const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGINSTATUS:
            localStorage.removeItem("resumebuilder")
            return { ...state, isLogin: action.data }
        case LOGINUSER:
            localStorage.setItem("resumebuilder", action.data._id)
            return { ...state, userData: action.data, isLogin: true }
        case CREATEUSER:
            localStorage.setItem("resumebuilder", action.data._id)
            return { ...state, userData: action.data, isLogin: true }
        case GETUSERBYID:
            return { ...state, userData: action.data, isLogin: true }
        case UPDATEUSERINFORMATION:
            return { ...state, userData: action.data }
        case CHOOSETEMPLATE:
            return { ...state, userData: action.data }
        case RESETVIEWCOUNT:
            return { ...state, userData: action.data }
        default:
            return state
    }
}

export default Reducer;