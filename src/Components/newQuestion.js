import React from "react";
import { connect } from "react-redux";
import { Card, Col, Row, Button, Form, FormControl, InputGroup, FormLabel } from "react-bootstrap";

class newQuestion extends React.Component {
    render() {
        const { authedUser, users } = this.props
        console.log(authedUser)
        return (
            <Card>
                <Card.Header as="h5" >{users[authedUser].name} new Question:</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <img src={users[authedUser].avatarURL} alt={"banner"} style={{ width: "100%" }} />
                        </Col>
                        <Col style={{ textAlign: "center" }}>
                            <Form>
                                <FormLabel>
                                    Would you rather
                                </FormLabel>
                                <InputGroup>
                                    <FormControl
                                        placeholder="option one"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <br/>
                                <p>OR</p>
                                <InputGroup>
                                    <FormControl
                                        placeholder="option two"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <br />
                                <br />
                                <Button variant="primary">submit</Button>
                            </Form>
                        </Col>
                    </Row>
                    <br />
                    <br />
                </Card.Body>
            </Card>
        )
    }

}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users
    };
}

export default connect(mapStateToProps)(newQuestion)