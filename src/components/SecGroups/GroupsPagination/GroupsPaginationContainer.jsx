import React from 'react'
import { connect } from 'react-redux';
import { onChangePageActionCreator, onShiftPageActionCreator, showLessActionCreator, showMoreActionCreator } from '../../../redux/groupsReducer';
import Pagination from '../../Widjets/Pagination/Pagination';

let mapStateToProps = (state, props) => {
    // console.log(state.groupsPage.interval);
    return {
        count: state.groupsPage.groupsData.length,
        // interval: [...state.groupsPage.interval],
        intervalActive: [...state.groupsPage.intervalActive],
        elementsOnPage: state.groupsPage.elementsOnPage,
        // elementsOnPageActive: state.groupsPage.elementsOnPageActive,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangePage: (num) => {
            dispatch(onChangePageActionCreator(num));
        },
        onShiftPage: (num) => {
            dispatch(onShiftPageActionCreator(num));
        },
        showMore: () => {
            dispatch(showMoreActionCreator());
        },
        showLess: () => {
            dispatch(showLessActionCreator());
        },
    }
}

const GroupsPaginationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);

export default GroupsPaginationContainer;