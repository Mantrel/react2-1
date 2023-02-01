import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function Contacto() {
    return (
        <Container className='pt-5'>
            <Row>
                <Col style={{ textAlign: "center" }}>

                    <p style={{ fontSize: "40px" }}>
                        Cuentanos, ¿en que te podemos ayudar?
                    </p>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Descripcion:</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Button style={{ background: "rgb(220, 53, 70)", border: "0px" }} type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contacto;