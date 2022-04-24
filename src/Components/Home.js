import React from "react";
import { connect } from "react-redux";
import { Row, Tab, Tabs, Col } from 'react-bootstrap'
import Question from "./Question";
import Vote from "./Vote";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
class Home extends React.Component {
    render() {
        const { authedUser, users, questions } = this.props
        return (
            <>
                <br />
                <Row>
                    <Col />
                    <Col xs={7} className="border border-info">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Answered Questions">
                                {Object.keys(users[authedUser].answers).map((answer) => (

                                    Object.keys(questions).map((question) => (

                                        question == answer
                                            ? <>
                                                <span key={question}>
                                                    <Link to={`/question/${question}`}>
                                                        <Question key={question} id={question} />
                                                    </Link>
                                                </span>
                                                <br />
                                            </>
                                            : <></>
                                    ))
                                ))}
                            </Tab>
                            <Tab eventKey="profile" title="Unswered Questions">
                                {Object.keys(users[authedUser].answers).map((answer) => (

                                    Object.keys(questions).map((question) => (
                                        question == answer
                                            ? <>
                                            </>
                                            : <>
                                                <Question key={question} id={question} />
                                                <br />
                                            </>
                                    ))

                                ))}
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col />
                </Row>
            </>
        )
    }
}
const mapStateToProps = ({ authedUser, users, questions }) => {
    return {
        authedUser,
        users,
        questions
        
    }
}
export default connect(mapStateToProps)(Home)