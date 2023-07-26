import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, useNavigate } from 'react-router-dom';

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
        <Navbar.Brand as={Link} to={'/'}>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to={"/"} className={"nav-item nav-link"}>Inicio</NavLink>
            {
              usuarioLogueado.nombreUsuario?
              <>
              <NavLink end to={"/administrador"} className={"nav-item nav-link"}>Administrador</NavLink>
              <NavLink className={"mav-item nav-link"} onClick={logout}>Salir</NavLink>
              </>:<NavLink end to={"/login"} className={"nav-item nav-link"}>Iniciar sesion</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
