import { useEffect, useState } from "react"

// Model/types
import workoutType from "../model/model"

// Components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"
import {useWorkoutContext, useWorkoutDispatchContext} from "../hooks/useWorkoutsContext"


const Home  = () => {

    // const [workouts, setWorkouts]= useState<workoutType[]>([])
    const state= useWorkoutContext()
    const dispatch = useWorkoutDispatchContext()


    // only fires once when first rendering
    useEffect(()=> {

        // should create async function inside
        const fetchWorkouts = async () => {
            const response= await fetch('http://localhost:4000/api/workouts/')
            const resJson= await response.json()

            if (response.ok) {
                // setWorkouts(resJson)
                dispatch({type: 'SET_WORKOUTS', payload: resJson})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {/* Logic will only run if if workouts is not null*/}

                {state.workouts.map((workout) => (
                        <WorkoutDetails key={String(workout._id)} workout={workout}/>
                    ))
                }
            </div>
            <WorkoutForm></WorkoutForm>
        </div>
    )
}

export default Home