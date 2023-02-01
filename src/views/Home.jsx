import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container className="text-center">
            <h1 className='pt-5'>
                Bienvenido a <span className='fw-bold'>Happy Cake</span>
            </h1>
            <h5>
               El lugar de los pasteles felices 
            </h5>
            <h1>🎂</h1>
        </Container>
    )
}

export default Home