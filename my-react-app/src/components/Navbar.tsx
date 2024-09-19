import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom'

const NavigationBar = () => {
    return (
        <header>
            <Navbar fixed="top" style={{ backgroundColor: '#90ee90' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 navbar-brand-color">Workout Buddies</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavigationBar