import React from 'react';
import {connect} from "react-redux";
import  * as ballReducer from "../reduxModule/ballReducer";

function Right_Child({owner , changeOwner}) {

    const onClickChildToParent = () => {
        if(owner == 'right')
            changeOwner('parent');
    };

    const onClickRightToLeft = () => {
        if(owner == 'right')
            changeOwner('left');
    };

    return(
        <div className={'child'}>
            <button onClick={onClickChildToParent} className={'btn-to-parent'}>Pass to Parent</button>
            <br/>
            Left Child
            <br/>
            <div className={'ball'} style={{visibility: owner == 'right' ? 'unset' :'hidden'}}>ball</div>
            <button onClick={onClickRightToLeft} className={'btn-right-to-left'}>Pass to Left</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Right_Child);