import React from 'react';
import Store from "../store/store";
import {useObserver} from "mobx-react"

export default function Left_Child() {

    const onClickChildToParent = () => {
        if(Store.owner == 'left')
            Store.setOwner('parent');
    };

    const onClickLeftToRight = () => {
        if(Store.owner == 'left')
            Store.setOwner('right');
    };

    return(
        useObserver(()=> (
            <div className={'child'}>
                <button onClick={onClickChildToParent} className={'btn-to-parent'}>Pass to Parent</button>
                <br/>
                Left Child
                <br/>
                <div className={'ball'} style={{visibility: Store.owner == 'left' ? 'unset' :'hidden'}}>ball</div>
                <button onClick={onClickLeftToRight} className={'btn-left-to-right'}>Pass to Right</button>
            </div>
        ))
    );

}