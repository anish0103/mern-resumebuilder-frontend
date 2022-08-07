export const LOGINSTATUS = "LOGINSTATUS"
export const LOGINUSER = "LOGINUSER"
export const CREATEUSER = "CREATEUSER"

const BACKENDLINK = "http://localhost:8080"

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
            console.log(userdata)
            dispatch({
                type: CREATEUSER,
                data: userdata
            })
        } catch (error) {
            console.log(error)
        }
    }
}