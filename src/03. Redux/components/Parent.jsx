import React from 'react';
import Left_Child from "./Left_Child";
import Right_Child from "./Right_Child";
import {connect} from "react-redux";
import  * as ballReducer from "../reduxModule/ballReducer";

function Parent({owner , changeOwner}) {

    const onClickParentToLeft = () => {
        if(owner == 'parent')
            changeOwner('left');
    };

    const onClickParentToRight = () => {
        if(owner == 'parent')
            changeOwner('right');
    };

    return(
        <table className={'parent-table'}>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        Parent
                        <br/>
                        <div className={'ball'} att={owner} style={{visibility: owner == 'parent' ? 'unset' :'hidden'}}>ball</div>
                        <br/>
                        <button onClick={onClickParentToLeft} className={'btn-parent-to-left'}>Pass to Left_Child</button>
                        <button onClick={onClickParentToRight} className={'btn-parent-to-right'}>Pass to Right_Child</button>
                    </td>
                </tr>
                <tr>
                    <td className={'left-table'}>
                        <Left_Child/>
                    </td>
                    <td className={'right-table'}>
                        <Right_Child/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

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

export default connect(mapStateToProps,mapDispatchToProps)(Parent);