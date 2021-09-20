import React from 'react'
import { connect } from 'react-redux';
import { onChangePageActionCreator, onShiftPageActionCreator, showLessActionCreator, showMoreActionCreator } from '../../../redux/groupsReducer';
import Pagination from '../../Widjets/Pagination/Pagination';

let mapStateToProps = (state, props) => {
    // console.log(state.groupsPage.interval);
    return {
        interval: [...state.groupsPage.interval],
        count: state.groupsPage.groupsData.length,
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