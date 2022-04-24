import '../App.css';
import React from 'react';
import Head from './Head';
import { handleInitialData } from '../action/shared';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Question from './Question';
import Links from './Links';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props
console.log(authedUser)
    return (

<>
        <Head />

            {
              authedUser === null
                ? <Login/>
                : <Links />
            }


</>

    )
  }
}
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default connect(
 mapStateToProps
)(App);