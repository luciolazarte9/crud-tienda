import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import banner from '../../assets/banner.png'
import Carousel from 'react-bootstrap/Carousel';


const Inicio = () => {


  return (
    <section className="mainSection">
          <Carousel slide={false}>
        <img
          className="d-block w-100"
          src={banner}
          alt="Banner"
        />
    </Carousel>
      <Container>
        <h1 className="display-5 text-center fw-bold mt-5">Looks perfectos para vos</h1>
        <hr />
        <Row className="mt-5 mb-5">
            <CardProducto></CardProducto>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
