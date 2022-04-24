import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Question from "./Question";

class Links extends React.Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Routes>
                        <Route exact path='/' element={<Home/>} />
                        <Route path='/question/:id' element={<Question/>} />
                    </Routes>
                </Fragment>
            </Router>
        )
    }
}
export default Links