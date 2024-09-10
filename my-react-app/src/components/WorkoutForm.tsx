import { useState } from "react"

const WorkoutForm = () => {
    const [title,setTitle]= useState<String>('')
    const [load, setLoad]= useState<String>('')
    const [reps, setReps]= useState<String>('')
    const [error, setError]= useState(null)

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
            console.log(json.error)
        } else {
            setTitle('')
            setReps('')
            setLoad('')
            setError(null)
            console.log('new workout added:', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title.toString()}/>

            <label>Load (KG):</label>
            <input type="number" onChange={(e) => setLoad(e.target.value)} value={load.toString()}/>

            <label>Reps:</label>
            <input type="number" onChange={(e) => setReps(e.target.value)} value={reps.toString()}/>

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm