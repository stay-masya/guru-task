import React, {Component} from 'react';
import {connect} from "react-redux";
import Team from "./Team";
import {getUsers} from "../../redux/reducers/team-reducer";


class TeamContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <>
                <Team team={this.props.team}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        team: state.teamReducer.team,
    }
};

export default connect(mapStateToProps, {getUsers})(TeamContainer)
