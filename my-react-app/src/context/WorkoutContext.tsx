import { createContext, useReducer } from 'react';

import workoutType from '../model/model';

interface State {
    workouts: workoutType[];
}

interface Action {
    type: 'SET_WORKOUTS' | 'CREATE_WORKOUT';
    payload: workoutType;
}

// interface WorkoutContextType {
//     state: State; // This is your reducer's state type
//     dispatch: React.Dispatch<Action>; // The type for dispatch from useReducer
//   }

// React Context is a way to manage state globally.
// One context for state, one for dispatch(setter)
// const WorkoutsContext = createContext<WorkoutContextType>('')
const WorkoutsContext = createContext<State | null>(null)
const WorkoutsDispatchContext = createContext<React.Dispatch<Action> | null>(null);

// Reducer method
const WorkoutsReducer = (state:State, action:Action):State => {
    switch(action.type) {

        case 'SET_WORKOUTS':
            if (Array.isArray(action.payload)) {
                return {workouts: action.payload}
            } else {
                console.log("must be an array of workouts")
                return state
            }

        case 'CREATE_WORKOUT':
            return {workouts: [action.payload, ...state.workouts]}

        default:
            return state
    }
}

const WorkoutContextProvider= ({children}: {children: React.JSX.Element}) => {

    // The useReducer Hook is similar to the useState Hook.
    // It allows for custom state logic.
    const [state, dispatch]= useReducer<React.Reducer<State, Action>>(WorkoutsReducer, {
        workouts:[]
    })

    console.log(state)
    console.log(dispatch)

    return (
        <WorkoutsContext.Provider value={ state }>
            <WorkoutsDispatchContext.Provider value={dispatch}>
                {children}
            </WorkoutsDispatchContext.Provider>
        </WorkoutsContext.Provider>
    )
}

export {WorkoutsContext, WorkoutsDispatchContext, WorkoutContextProvider}