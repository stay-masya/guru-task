import React, {Component} from 'react';
import {connect} from "react-redux";
import Team from "./Team";
import {getUsers} from "../../redux/reducers/team-reducer";


class TeamContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCounter: 0
        };
    }

    fetchMoreData = () => {
        this.state.pageCounter++;
        this.props.getUsers(this.state.pageCounter)
    };

    componentDidMount() {
        this.fetchMoreData()
    }

    render() {
        return (
            <>
                <Team team={this.props.team}
                      fetchMoreData={this.fetchMoreData}/>
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
