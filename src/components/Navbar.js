import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import Logo from "../assets/images/logo.svg"

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="sm" className="mb-3">
            <Container fluid className="g-0">
                <Navbar.Brand href="#"><img src={Logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-menu`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-menu`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-menu`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/new">New</Nav.Link>
                            <Nav.Link href="/popular">Popular</Nav.Link>
                            <Nav.Link href="/trending">Trending</Nav.Link>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}