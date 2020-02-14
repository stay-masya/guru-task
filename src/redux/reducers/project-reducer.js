import {API} from '../../api/api'

//CONST
const GET_PROJECT_FIELD = 'GET-PROJECT-FIELD'
const GET_COMMIT_COUNTER = 'GET-COMMIT-COUNTER'
const GET_SUB_COUNTER = 'GET-SUB-COUNTER'
const GET_DATE_CHANGE = 'GET-DATE-CHANGE'

// ACTIONS CREATOR
export const getProjectFieldAC = (name) => {
    return {
        type: GET_PROJECT_FIELD,
        name
    };
};

export const getCommitCounterAC = (value) => {
    return {
        type: GET_COMMIT_COUNTER,
        value
    };
};

//THUNK
export const getProjectField = () => {
    return (dispatch) => {
        API.getProjectField()
            .then(response => {
                dispatch(getProjectFieldAC(response))
            });

        API.getSubCounter()
            .then(response => {
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                dispatch(getCommitCounterAC(response.map(i => {
                    return i.total
                }).reduce(reducer)))
            })
    };
};

//Reducer
let initialState = {
    projectName: '',
    commitCounter: null,
    subCounter: null,
    lastChangeDate: null,
    avatar: '',
    description: ''
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PROJECT_FIELD: {
            return {
                ...state,
                projectName: action.name.full_name,
                subCounter: action.name.subscribers_count,
                lastChangeDate: action.name.updated_at.split(";")[0].replace("T", " ").replace("Z", "").replace(";", ""),
                description: action.name.description,
                avatar: action.name.owner.avatar_url,
            };
        }
        case GET_COMMIT_COUNTER: {
            return {
                ...state,
                commitCounter: action.value
            };
        }

        default:
            return state
    }
};

export default projectReducer
