import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'


const Barra = () => {
    return (


        <Navbar style={{ background: "rgb(220, 53, 70)", padding: "15px" }} variant="dark">
            <Container>
                <Nav>
                <Link to="/" className="text-white ms-3 text-decoration-none">
                    🏠 Home
                </Link>
                <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
                    📒 Contacto
                </Link>
                </Nav>

                <Link to="/" className="text-white ms-3 text-decoration-none">
                    Happy Cake 🍰
                </Link>
            </Container>


        </Navbar>


    )
}

export default Barra
