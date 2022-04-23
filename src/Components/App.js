import '../App.css';
import React from 'react';
import Head from './Head';
import { handleInitialData } from '../action/shared';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props

    return (
      <>
        <Head />
        {authedUser != null
          ? <Home />
          : <Login />
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

export default connect(mapStateToProps)(App);
