import React from 'react'
import { connect } from 'react-redux';
import GroupsList from './GroupsList';

let mapStateToProps = (state, props) => {
    // console.log(state.groupsPage.interval);
    return {
        groupsData: [...state.groupsPage.groupsData],
        // interval: [...state.groupsPage.interval],
        interval: [...state.groupsPage.intervalActive],
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const GroupsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupsList);

export default GroupsListContainer;