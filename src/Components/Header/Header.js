import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar fixed="top" className="bg-white text-slate-100" expand={false}>
        <Container>
          <Navbar.Brand as={Link} to="home">
            <span className=" font-semibold text-2xl">Emma Watson</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                as={Link}
                className="text-decoration-none"
                to="home"
                id="offcanvasNavbarLabel"
              >
                <span className=" text-4xl font-semibold text-gray-800">
                  Emma Watson
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link as={Link} to="home">
                  <span className="link">HOME</span>
                </Nav.Link>
                <Nav.Link as={Link} to="aboutme">
                  <span className="link">ABOUT ME</span>
                </Nav.Link>
                <Nav.Link as={Link} to="blogs">
                  <span className="link">BLOGS</span>
                </Nav.Link>
                <Nav.Link href="home#services">
                  <span className="link">Services</span>
                </Nav.Link>
                <Nav.Link as={Link} to="signup">
                  <span className="link">SignUp</span>
                </Nav.Link>

                {user ? (
                  <Nav.Link onClick={handleSignOut} as={Link} to="login">
                    <span className="link">Sign Out</span>
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="login">
                    <span className="link">Login</span>
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
