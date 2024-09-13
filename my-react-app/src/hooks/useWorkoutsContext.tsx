import { WorkoutsContext, WorkoutsDispatchContext } from "../context/WorkoutContext";
import { useContext } from "react";

const useWorkoutContext= () => {
    const context= useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkoutContext must be used inside an WorkoutsContextProvider')
    }

    return context
}

const useWorkoutDispatchContext= () => {
    const context= useContext(WorkoutsDispatchContext)

    if (!context) {
        throw Error('useWorkoutDispatchContext must be used inside an WorkoutsContextProvider')
    }

    return context
}

export {useWorkoutContext, useWorkoutDispatchContext}