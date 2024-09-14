import { useState } from "react"

import { useWorkoutContext } from "../hooks/useWorkoutsContext"
import { useWorkoutDispatchContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
    const [title,setTitle]= useState<String>('')
    const [load, setLoad]= useState<String>('')
    const [reps, setReps]= useState<String>('')

    const [error, setError]= useState(null)
    const [emptyFields, setEmptyFields] = useState<String[]>([])

    const dispatch = useWorkoutDispatchContext()

    // Function to handle submit in form
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {

        // prevent page refresh
        e.preventDefault()

        const workout= {title, load, reps}

        const response= await fetch('http://localhost:4000/api/workouts/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
            console.log(emptyFields)
        } else {
            setTitle('')
            setReps('')
            setLoad('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added:', json)

            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title.toString()} className={emptyFields.includes('title')? 'error' : ''}/>

            <label>Load (KG):</label>
            <input type="number" onChange={(e) => setLoad(e.target.value)} value={load.toString()} className={emptyFields.includes('load')? 'error' : ''}/>

            <label>Reps:</label>
            <input type="number" onChange={(e) => setReps(e.target.value)} value={reps.toString()} className={emptyFields.includes('reps')? 'error' : ''}/>

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm