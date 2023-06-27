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
        <h1 className="display-4 text-center">Looks perfectos para vos</h1>
        <hr />
        <Row>
            <CardProducto></CardProducto>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
