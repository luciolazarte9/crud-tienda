import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";


const Inicio = () => {


  return (
    <section className="mainSection">
      <Container>
        <h1 className="display-5 text-center fw-bold mt-5">Productos</h1>
        <hr />
        <Row className="mt-5 mb-5">
            <CardProducto></CardProducto>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
