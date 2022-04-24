import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Router ,NavLink} from "react-router-dom";
import { Redirect } from "react-router-dom";
import { setAuthedUser } from "../action/setAuthedUser";

class Head extends React.Component {
    disconnect = () => {
        this.props.dispatch(setAuthedUser(null))
    }
    render() {
        const { authedUser } = this.props
        return (
            <>
                <Navbar bg="dark" variant="dark" >
                    <Container style={{ textAlign: 'center'}}>
                    <NavLink to='' > <h1>Would you rather</h1></NavLink>
                        {authedUser != null
                            ? <>
                                <Nav className="me-auto">
                                    <NavLink to=''>Home</NavLink>
                                    <NavLink to="newQuestion">New Question</NavLink>
                                    <NavLink to="leaderboard">LeaderBoard</NavLink>
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