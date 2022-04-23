import React from "react";
import { Card, Button } from "react-bootstrap"
import { getInitialData } from "../utils/initData";
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

render() {
    console.log(getInitialData())
    return (
        <Card style={{ textAlign: 'center' }}>
            <Card.Header as="h5">Login</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
}
export default Login