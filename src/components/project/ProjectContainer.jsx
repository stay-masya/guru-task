import React, {Component} from 'react';
import {connect} from "react-redux";
import Project from "./Project";
import projectReducer, {getProjectField} from "../../redux/reducers/project-reducer";


class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getProjectField()
    }

    render() {
        return (
            <>
                <Project projectName={this.props.projectName}
                         subCounter={this.props.subCounter}
                         lastChangeDate={this.props.lastChangeDate}
                         commitCounter={this.props.commitCounter}
                         avatar={this.props.avatar}
                         description={this.props.description}
                         team={this.props.team}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        projectName: state.projectReducer.projectName,
        subCounter: state.projectReducer.subCounter,
        lastChangeDate: state.projectReducer.lastChangeDate,
        commitCounter: state.projectReducer.commitCounter,
        avatar: state.projectReducer.avatar,
        description: state.projectReducer.description,
        team: state.teamReducer.team,
    }
};

export default connect(mapStateToProps, {getProjectField})(ProjectContainer)
