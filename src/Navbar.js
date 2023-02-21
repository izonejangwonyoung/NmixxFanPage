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
                    <Nav   className="me-auto">
                        <NavDropdown  title="Members" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="who/NMIXX" style={{textDecoration:"none" ,color:"black",display:"block"}}>NMIXX</Link></NavDropdown.Item>
                            <NavDropdown.Divider  ></NavDropdown.Divider>

                            <NavDropdown.Item ><Link to="who/Haewon" style={{textDecoration:"none" ,color:"black",display:"block" }}>해원</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="who/lilly" style={{textDecoration:"none" ,color:"black",display:"block"}}>릴리</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="who/Sullyoon" style={{textDecoration:"none" ,color:"black",display:"block"}}>설윤</Link></NavDropdown.Item>
                            {/*<NavDropdown.Item ><Link to="who/Jinni" style={{textDecoration:"none" ,color:"black",display:"block"}}>지니</Link></NavDropdown.Item>*/}
                            <NavDropdown.Item  ><Link to="who/Bae" style={{textDecoration:"none" ,color:"black",display:"block"}}>배이</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="who/Jiwoo" style={{textDecoration:"none" ,color:"black",display:"block"}}>지우</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="who/Kyujin" style={{textDecoration:"none" ,color:"black",display:"block"}}>규진</Link></NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link><Link to="goods"style={{textDecoration:"none" ,color:"#0000008C",display:"block"}}>Goods</Link></Nav.Link>
                        <Nav.Link ><Link to="Board"style={{textDecoration:"none" ,color:"#0000008C",display:"block"}}>자유게시판</Link></Nav.Link>
                        <Nav.Link ><Link to="MovieBoard"style={{textDecoration:"none" ,color:"#0000008C",display:"block"}}>영화 제목 검색 게시판[API 연습]</Link></Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}

export default MainNavBar;