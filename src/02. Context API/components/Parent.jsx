import React, { useContext } from 'react';
import Left_Child from "./Left_Child";
import Right_Child from "./Right_Child";
import {Context}from "./context/OwnerContext"

export default function Parent() {

    const context = useContext(Context);

    const onClickParentToLeft = () => {
        if(context.owner == 'parent')
            context.setOwner('left');
    };

    const onClickParentToRight = () => {
        if(context.owner == 'parent')
            context.setOwner('right');
    };

    return(
        <table className={'parent-table'}>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        Parent
                        <br/>
                        <div className={'ball'} style={{visibility: context.owner == 'parent' ? 'unset' :'hidden'}}>ball</div>
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