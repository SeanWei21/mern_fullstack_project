import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom'

const NavigationBar = () => {
    return (
        <header>
            <Navbar fixed="top" style={{ backgroundColor: '#90ee90' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 navbar-brand-color">Workout Buddies</Navbar.Brand>

                </Container>
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/sean-wei-lee-40918415b" target="_blank">➡️ Pls Hire Me 🥺</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    )
}

export default NavigationBar