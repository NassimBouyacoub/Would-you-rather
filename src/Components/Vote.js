import React from "react";
import { connect } from "react-redux";
import { Card, Col, Row,Button,Forl, Form } from 'react-bootstrap'

class Vote extends React.Component {
    render() {
        const { question,users } = this.props
        const { author, optionOne, optionTwo } = question

        return (
            <Card>
                <Card.Header as="h5" >{users[author].name} asks:</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <img src={users[author].avatarURL} alt={"banner"} style={{ width: "100%" }} />
                        </Col>
                        <Col>
                            <h3>Would you rather...</h3>
                            <>
                                <Form.Check type="radio" label={optionOne.text} /> 
                                <Form.Check type="radio" label={optionTwo.text} /> 
                            </>
                            <Button variant="primary">Submit</Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                </Card.Body>
            </Card>
        )
    }
}
const mapStateToProps = ({questions,users,authedUser},{id}) => {

    const question = questions[id]
    return {
        authedUser,
        question,
        users
    }

}



export default connect(mapStateToProps)(Vote)