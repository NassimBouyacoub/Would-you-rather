import '../App.css';
import React from 'react';
import Head from './Head';
import { handleInitialData } from '../action/shared';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Question from './Question';
import NewQuestion from './newQuestion';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props
    console.log(authedUser)
    return (

      <Router>
        <Head />
        <Routes>
          <Route path="*" element={<h1>erro 404 Page not found.</h1>} />
          <Route exact path='/' element={
            authedUser === null
              ? <Login />
              : <Home/>
          } />
          <Route path='/question/:id' element={<Question />} />
          <Route path='/newQuestion' element={<NewQuestion/>}/>
          <Route path='/leaderboard' />
        </Routes>



      </Router>

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