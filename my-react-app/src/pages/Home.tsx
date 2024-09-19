import { useEffect} from "react"

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            const response= await fetch(import.meta.env.VITE_SERVER_URI+'/api/workouts/')
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
            <Container fluid>
                <Row>
                    <Col lg={true}>
                        <WorkoutForm></WorkoutForm>
                        </Col>
                    <Col lg={true}>
                        <div>
                            {state.workouts.map((workout) => (
                                    <WorkoutDetails key={String(workout._id)} workout={workout}/>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home