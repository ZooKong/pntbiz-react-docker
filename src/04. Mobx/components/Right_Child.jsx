import React from 'react';
import Store from "../store/store";
import {useObserver} from "mobx-react"

export default function Right_Child() {

    const onClickChildToParent = () => {
        if(Store.owner == 'right')
            Store.setOwner('parent');
    };

    const onClickRightToLeft = () => {
        if(Store.owner == 'right')
            Store.setOwner('left');
    };

    return(
        useObserver(()=> (
            <div className={'child'}>
                <button onClick={onClickChildToParent} className={'btn-to-parent'}>Pass to Parent</button>
                <br/>
                Left Child
                <br/>
                <div className={'ball'} style={{visibility: Store.owner == 'right' ? 'unset' :'hidden'}}>ball</div>
                <button onClick={onClickRightToLeft} className={'btn-right-to-left'}>Pass to Right</button>
            </div>
        ))
    );

}