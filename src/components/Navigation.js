import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import LinkContainer from "react-router-bootstrap/LinkContainer";

import { HouseFill, EnvelopeFill, Download, Box2Fill } from "react-bootstrap-icons";

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Safest Desk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/"><Nav.Link>
                        <HouseFill/>{" "}
                        Home
                    </Nav.Link></LinkContainer>
                    <LinkContainer to="/download"><Nav.Link>
                        <Download/>{" "}
                        Download
                    </Nav.Link></LinkContainer>
                    <LinkContainer to="/order"><Nav.Link>
                        <Box2Fill/>{" "}
                        Order
                    </Nav.Link></LinkContainer>
                    <LinkContainer to="/contact"><Nav.Link>
                        <EnvelopeFill/>{" "}
                        Contact
                    </Nav.Link></LinkContainer>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    );
}

export default Navigation;