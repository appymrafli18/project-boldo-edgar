import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Boldo } from '../../assets';

const textNavbar = [
  {
    name: 'Product',
    path: '/product',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'About',
    path: '/about',
  },
];

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src={Boldo} alt="Logo" />
            Boldo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {textNavbar.map((item, index) => (
                <div key={index} className="nav-link w-lg-auto w-100 text-center">
                  <NavLink to={item.path}>{item.name}</NavLink>
                </div>
              ))}
              <NavLink to="/login" className="nav-login">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
