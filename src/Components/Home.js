import React from "react";
import { connect } from "react-redux";
import { Row, Tab, Tabs, Col } from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return (
            <>
                <br />
                <Row>
                    <Col />
                    <Col xs={7} className="border border-info">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Answered Questions">
                                A
                            </Tab>
                            <Tab eventKey="profile" title="Unswered Questions">
                                hi
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col />
                </Row>
            </>
        )
    }
}
const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser,
    }
}
export default connect(mapStateToProps)(Home)