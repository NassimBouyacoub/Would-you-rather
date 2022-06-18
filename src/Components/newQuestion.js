import React from "react";
import { connect } from "react-redux";
import { Card, Col, Row, Button, Form, FormControl, InputGroup, FormLabel } from "react-bootstrap";
import { handleSaveQuestion } from "../action/questions";
import { Navigate } from "react-router-dom";
import authedUser from "../Reducers/authedUser";

class newQuestion extends React.Component {
    state = {
        validSubmit: false,
        one: '',
        two: ''
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { one, two } = this.state;
          handleSaveQuestion(one, two,this.props.authedUser);
          this.setState({
            one: '',
            two: ''
          });
          this.setState({ validSubmit: true });
        };
      
    render() {
        if (this.state.validSubmit === true) {
            return <Navigate to="/" />;
          }
        const { handleChange, handleSubmit } = this

        const { authedUser, users } = this.props
        console.log(authedUser)
        return (
            <Card>
                <Card.Header as="h5" >new Question:</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <img src={users[authedUser].avatarURL} alt={"banner"} style={{ width: "100%" }} />
                        </Col>
                        <Col style={{ textAlign: "center" }}>
                            <Form onSubmit={handleSubmit}>
                                <FormLabel>
                                    Would you rather
                                </FormLabel>
                                <InputGroup>
                                    <FormControl
                                        id="one"
                                        value={this.state.one}
                                        onChange={handleChange}
                                        placeholder="First option"
                                    />
                                </InputGroup>
                                <br />
                                <p>OR</p>
                                <InputGroup>
                                    <FormControl
                                        id="two"
                                        value={this.state.two}
                                        onChange={handleChange}
                                        placeholder="Second option"
                                    />
                                </InputGroup>
                                <br />
                                <br />
                                <Button variant="primary" type="submit">submit</Button>
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
function mapStateToProps({ authedUser,users }) {
    return {
      authedUser,
      users
    };
  }
  
  export default connect(
    mapStateToProps,
    { handleSaveQuestion }
  )(newQuestion);




// const mapStateToProps = ({ authedUser, users }) => {
//     return {
//         authedUser,
//         users,
//     };
// }

// export default connect(mapStateToProps)(newQuestion)