import workoutType from "../model/model"

import { useWorkoutDispatchContext } from "../hooks/useWorkoutsContext"
import { formatDistanceToNow } from "date-fns";

const WorkoutDetails = ({ workout }: { workout: workoutType }) => {
    const dispatch= useWorkoutDispatchContext()

    // method to delete 1 workout from servers
    const handleClick = async() => {
        const response= await fetch('http://localhost:4000/api/workouts/'+ workout._id, {
            method: 'DELETE'
        })

        const json= await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong> {workout.load.toString()} </p>
            <p><strong>Reps: </strong> {workout.reps.toString()} </p>
            <p>{formatDistanceToNow(new Date(workout.createdAt.toString()), {addSuffix: true}) }</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails