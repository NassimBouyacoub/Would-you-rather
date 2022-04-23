import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap"
import { connect } from "react-redux";
import { setAuthedUser } from "../action/setAuthedUser";

class Head extends React.Component {
    disconnect = () => {
        this.props.dispatch(setAuthedUser(null))
    }
    render() {
        const { authedUser } = this.props
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container style={{ textAlign: 'center' }}>
                        <Navbar.Brand href="/" >Would you rather</Navbar.Brand>
                        {authedUser != null
                            ? <>
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">New Question</Nav.Link>
                                    <Nav.Link href="#pricing">Leader Board</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link>{authedUser === null
                                        ? ""
                                        : authedUser
                                    }</Nav.Link>
                                    <Nav.Link onClick={this.disconnect}>Disconnect</Nav.Link>
                                </Nav>
                            </>
                            : <></>}


                    </Container>
                </Navbar>
            </>
        )
    }
}
const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser,
    }
}
export default connect(mapStateToProps)(Head);