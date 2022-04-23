import React from "react";
import { connect } from "react-redux";

class Dashboard extends React.Component{
    render(){
        const {authedUser} = this.props
        return(
            <p>hi {authedUser}</p>
        )
    }
}

const mapStateToProps=({authedUser})=>{
    return{
        authedUser
    }
}
export default connect(mapStateToProps)(Dashboard)