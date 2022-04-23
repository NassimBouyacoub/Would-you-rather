import React from "react";
import { Card, Dropdown, Row, Col } from "react-bootstrap"
import { connect } from "react-redux";
import { setAuthedUser } from "../action/setAuthedUser";
import Image  from "../banner.jpg";
class Login extends React.Component {
    handleLogin = value => {
        console.log(value)
        this.props.dispatch(setAuthedUser(value));
      };
    render() {
        const { users,authedUser } = this.props
       console.log(authedUser)
        return (
            <>
                <br />
                <br />
                <br />
                <Row>
                    <Col />
                    <Col>
                        <Card style={{ textAlign: 'center' }}>
                            <Card.Header as="h5">Login</Card.Header>
                            <Card.Body>
                                <img src={Image} alt={"banner"}/>
                                <br/>
                                <br/>

                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Choose User
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {Object.keys(users).map((user, i) => (
                                            <Dropdown.Item onClick={()=>this.handleLogin(user)} key={user.id}>{user}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
            </>
        )
    }
}
const mapStateToProps = ({ users,authedUser }) => {
    return {
        authedUser,
        users,
    }
}
export default connect(mapStateToProps)(Login)