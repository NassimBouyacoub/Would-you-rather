import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';


const Question = (props) => {

    const users = useSelector(state => state.users)
    const questions = useSelector(state => state.questions)

    const { id } = useParams();
    if (id === undefined) {
        const id = props.id
        const question= questions[id]
        const { author, optionOne } = question;

        return (
            <Card>
                <Card.Header as="h5" >{author} asks:</Card.Header>
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
    else {
        const question = questions[id];
        const { author, optionOne } = question;

        return (
            <Card>
                <Card.Header as="h5" >{author} asks:</Card.Header>
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
    // console.log(this.props.path);
    // console.log(author)



}



const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
    const idd = id
    return {
        authedUser,
        questions,
        users,
        idd,
    }
}

export default connect(mapStateToProps)(Question)