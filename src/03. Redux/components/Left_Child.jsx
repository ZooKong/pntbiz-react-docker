import React from 'react';
import {connect} from "react-redux";
import  * as ballReducer from "../reduxModule/ballReducer";

function Left_Child({owner , changeOwner}) {

    const onClickChildToParent = () => {
        if(owner == 'left')
            changeOwner('parent');
    };

    const onClickLeftToRight = () => {
        if(owner == 'left')
            changeOwner('right');
    };

    return(
        <div className={'child'}>
            <button onClick={onClickChildToParent} className={'btn-to-parent'}>Pass to Parent</button>
            <br/>
            Left Child
            <br/>
            <div className={'ball'} style={{visibility: owner == 'left' ? 'unset' :'hidden'}}>ball</div>
            <button onClick={onClickLeftToRight} className={'btn-left-to-right'}>Pass to Right</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    changeOwner : (owner) => {
        dispatch(ballReducer.getActionChangeOwner(owner));
    }
});

const mapStateToProps = (state) => {
    return {
        owner: state.ballReducer.owner
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Left_Child);