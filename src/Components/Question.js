import React from "react";
import { Card, Col, Row,Button } from "react-bootstrap";
import { connect } from "react-redux";

class Question extends React.Component {
    render() {
        const { question, users } = this.props
        const { author, optionOne } = question
        return (
            <Card>
                <Card.Header as="h5" >{users[author].name} asks:</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <img src={users[author].avatarURL} alt={"banner"} style={{ width: "100%" }} />
                        </Col>
                        <Col>
                            <h3>Would you rather</h3>
                            <p>...{optionOne.text}...</p>
                            <Button variant="primary">View Poll</Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                </Card.Body>
            </Card>
        )
    }
}



const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
    const question = questions[id]
    return {
        authedUser,
        question,
        users
    }
}

export default connect(mapStateToProps)(Question)