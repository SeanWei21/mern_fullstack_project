import workoutType from "../model/model"

const WorkoutDetails = ({ workout }: { workout: workoutType }) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong> {workout.load.toString()} </p>
            <p><strong>Reps: </strong> {workout.reps.toString()} </p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails