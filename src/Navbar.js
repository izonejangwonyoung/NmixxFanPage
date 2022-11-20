import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Haewon from "./who/Haewon";
import Mainpage from "./Mainpage";

function MainNavBar() {
    return (<>
        <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand href="/">Who Is NMIXX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  style={{backgroundColor:"#E5E5E5"}} className="me-auto">
                        <Nav.Link href="#home" style={{marginLeft: "5pm 0px",backgroundColor:"#E5E5E5"}}>Home</Nav.Link>
                        <NavDropdown style={{backgroundColor:"grey"}} title="Members" id="basic-nav-dropdown">
                            <NavDropdown.Item style={{backgroundColor:"#E5E5E5"}}><Link to="who/NMIXX" style={{textDecoration:"none" ,color:"black",display:"block"}}>NMIXX</Link></NavDropdown.Item>
                            <NavDropdown.Divider style={{backgroundColor:"#E5E5E5"}} ></NavDropdown.Divider>

                            <NavDropdown.Item style={{backgroundColor:"#E5E5E5"}}><Link to="who/Haewon" style={{textDecoration:"none" ,color:"black",display:"block" }}>해원</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor:"#E5E5E5"}}><Link to="who/lilly" style={{textDecoration:"none" ,color:"black",display:"block"}}>릴리</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor:"#E5E5E5"}}><Link to="who/Sullyoon" style={{textDecoration:"none" ,color:"black",display:"block"}}>설윤</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor:"#E5E5E5"}}><Link to="who/Jinni" style={{textDecoration:"none" ,color:"black",display:"block"}}>지니</Link></NavDropdown.Item>
                            <NavDropdown.Item  style={{backgroundColor:"#E5E5E5"}}><Link to="who/Bae" style={{textDecoration:"none" ,color:"black",display:"block"}}>배이</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor:"#E5E5E5"}}><Link to="who/Jiwoo" style={{textDecoration:"none" ,color:"black",display:"block"}}>지우</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor:"#E5E5E5"}}><Link to="who/Kyujin" style={{textDecoration:"none" ,color:"black",display:"block"}}>규진</Link></NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link><Link to="goods"style={{textDecoration:"none" ,color:"#0000008C",backgroundColor:"#E5E5E5",display:"block"}}>Goods</Link></Nav.Link>
                        <Nav.Link ><Link to="Board"style={{textDecoration:"none" ,color:"#0000008C",backgroundColor:"#E5E5E5",display:"block"}}>자유게시판</Link></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}

export default MainNavBar;