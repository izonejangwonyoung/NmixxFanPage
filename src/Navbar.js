import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Who Is NMIXX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Members" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#who/3.4" disabled>
                                NMIXX
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#who/haewon">해원</NavDropdown.Item>
                            <NavDropdown.Item href="#who/lilly">릴리</NavDropdown.Item>
                            <NavDropdown.Item href="#who/Sullyoon">설윤</NavDropdown.Item>
                            <NavDropdown.Item href="#who/Jinni">지니</NavDropdown.Item>
                            <NavDropdown.Item href="#who/Bae">배이</NavDropdown.Item>
                            <NavDropdown.Item href="#who/Jiwoo">지우</NavDropdown.Item>
                            <NavDropdown.Item href="#who/Kyujin">규진</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#goods">Goods</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;