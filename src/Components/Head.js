import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap"

class Head extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Would you rather</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">New Question</Nav.Link>
                            <Nav.Link href="#pricing">Leader Board</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}
export default Head;