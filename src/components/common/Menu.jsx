import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Thehpps.png'

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate();

  const logout = ()=>{
    sessionStorage.removeItem('usuario');
    setUsuarioLogueado({});
    navegacion('/');
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'}><img
          className="d-flex tamano-imagen"
          src={logo}
          alt="logo"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {
              usuarioLogueado.nombreUsuario?
              <>
              
              </>:<NavLink end to={"/registro"} className={"nav-item nav-link"}>Registro</NavLink>

            }
            {
              usuarioLogueado.nombreUsuario === 'admin'?
              <>
              <NavLink end to={"/administrador"} className={"nav-item nav-link"}>Administrador</NavLink>
              
              </>:<NavLink end to={"/"} className={"nav-item nav-link"}>Inicio</NavLink>
              

            }
            {
              usuarioLogueado.nombreUsuario?
              <>
              <NavLink end to={"/login"} className={"nav-item nav-link"}>Iniciar sesion</NavLink>
              <NavLink className={"mav-item nav-link"} onClick={logout}>Salir</NavLink>
              </>:            <NavLink end to={"/"} className={"nav-item nav-link"}>Inicio</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
