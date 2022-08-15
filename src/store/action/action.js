export const LOGINSTATUS = "LOGINSTATUS"
export const LOGINUSER = "LOGINUSER"
export const CREATEUSER = "CREATEUSER"
export const GETUSERBYID = "GETUSERBYID"
export const UPDATEUSERINFORMATION = "UPDATEUSERINFORMATION"
export const CHOOSETEMPLATE = "CHOOSETEMPLATE"

export const BACKENDLINK = "http://localhost:8080"

export const LoginStatusHandler = data => {
    return {
        type: LOGINSTATUS,
        data: data
    }
}

export const LoginUser = data => {
    return async dispatch => {
        try {
            // Check the user and perform login 
            const response = await fetch(BACKENDLINK + '/api/users/login/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const userdata = await response.json()
            if (!response.ok) {
                throw userdata.message
            }
            dispatch({
                type: LOGINUSER,
                data: userdata
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const createUser = data => {
    return async dispatch => {
        try {
            // Send the Data To the backend
            const response = await fetch(BACKENDLINK + '/api/users/signup/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const userdata = await response.json()
            if (!response.ok) {
                throw userdata.message
            }
            dispatch({
                type: CREATEUSER,
                data: userdata
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const googleLoginSignup = data => {
    return async dispatch => {
        try {
            // Send the Data To the backend
            const response = await fetch(BACKENDLINK + '/api/users/googlelogin/', {
                method: 'POST',
                body: JSON.stringify({ token: data.credential }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const userdata = await response.json()
            if (!response.ok) {
                throw userdata.message
            }
            dispatch({
                type: CREATEUSER,
                data: userdata
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const addInformationForm = (data, id) => {
    return async dispatch => {
        try {
            // Send the Data To the backend
            const response = await fetch(BACKENDLINK + `/api/users/addinformation/${id}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const userdata = await response.json()
            if (!response.ok) {
                throw userdata.message
            }
            dispatch({
                type: UPDATEUSERINFORMATION,
                data: userdata
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getUserById = id => {
    return async dispatch => {
        try {
            // Get the data of the user by passing the id of the user
            const response = await fetch(BACKENDLINK + `/api/users/${id}`)
            const userdata = await response.json();
            if (!response.ok) {
                throw userdata.message
            }
            dispatch({
                type: GETUSERBYID,
                data: userdata
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const chooseTemplate = data => {
    return async dispatch => {
        try {
            // Check the user and perform login 
            const response = await fetch(BACKENDLINK + '/api/users/choosetemplate/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const userdata = await response.json()
            if (!response.ok) {
                throw userdata.message
            }
            dispatch({
                type: CHOOSETEMPLATE,
                data: userdata
            })
        } catch (error) {
            console.log(error)
        }
    }
}