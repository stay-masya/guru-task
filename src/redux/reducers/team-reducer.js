import {API} from '../../api/api'

//CONST
const GET_USERS = 'GET-USERS'

// ACTIONS CREATOR
export const getUsersAC = (team) => {
    return {
        type: GET_USERS,
        team
    };
};

//DISPATCH
export const getUsers = (value) => {
    return (dispatch) => {
        API.getUsers(value)
            .then(response => {
                dispatch(getUsersAC(response))
            })
    };
};

//Reducer
let initialState = {
    team: [],
};

const teamReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USERS: {
            return {
                ...state,
                team: state.team.concat(action.team)
            };
        }

        default:
            return state
    }
};

export default teamReducer
