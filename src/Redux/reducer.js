let initialState = {
    routine_id: 0,
    exercise_id: 0,
    reps: 0,
    wheight: 0
}

//CONST Variables
const ADD_ROUTINE = 'ADD_ROUTINE';
const RESET_STORE = 'RESET_STORE';

//REDUCER FUNCTION 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ROUTINE:
            return Object.assign({}, state, action.payload)
        case RESET_STORE:
            return initialState;

        default:
            return state;
    }
}

//ACTION BUILDERS/CREATORS
export function addRoutine(routineVal) {
    //The return of an action creator is the action in the reducer
    return {
        type: ADD_ROUTINE,
        payload: routineVal
    }
}

export function deleteRoutine() {
    return {
        type: RESET_STORE
    }
}