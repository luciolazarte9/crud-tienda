import { Button, Form, Container, Card } from "react-bootstrap";


const Registro = () => {
  return (
    <Container className="mainSection">
      <Card className="align-items-center border-0">
        <Card className="my-5 col-lg-6 rounded-0 border-0 cards-disenio">
          <h5 className="text-center">Registro</h5>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese un email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese un email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese un nombre de usuario</Form.Label>
                <Form.Control type="text" placeholder="Ingrese un usuario" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contrasena</Form.Label>
                <Form.Control type="password" placeholder="Ingrese una contrasena" />
              </Form.Group>
              <Button variant="dark" type="submit">
                Registrarse
              </Button>
              <Button variant="primary ms-3" type="submit">
                Ya tengo cuenta
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
};

export default Registro;
