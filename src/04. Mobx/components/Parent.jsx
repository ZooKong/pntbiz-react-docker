import React from 'react';
import Left_Child from "./Left_Child";
import Right_Child from "./Right_Child";
import Store from "../store/store";
import {useObserver} from "mobx-react"

export default function Parent() {

    const onClickParentToLeft = () => {
        if(Store.owner == 'parent')
            Store.owner = 'left';
    };

    const onClickParentToRight = () => {
        if(Store.owner == 'parent')
            Store.owner = 'right';
    };

    return(
        useObserver(() => (
            <table className={'parent-table'}>
                <tbody>
                <tr>
                    <td colSpan={2}>
                        Parent
                        <br/>
                        <div className={'ball'} style={{visibility: Store.owner == 'parent' ? 'unset' :'hidden'}}>ball</div>
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
        ))
    );

}