import React, { useContext } from 'react';
import {Context} from "./context/OwnerContext"

export default function Left_Child({owner = null}) {

    const context = useContext(Context);

    const onClickChildToParent = () => {
        if(context.owner == 'left')
            context.setOwner('parent');
    };

    const onClickLeftToRight = () => {
        if(context.owner == 'left')
            context.setOwner('right');
    };

    return(
        <div className={'child'}>
            <button onClick={onClickChildToParent} className={'btn-to-parent'}>Pass to Parent</button>
            <br/>
            Left Child
            <br/>
            <div className={'ball'} style={{visibility: context.owner == 'left' ? 'unset' :'hidden'}}>ball</div>
            <button onClick={onClickLeftToRight} className={'btn-left-to-right'}>Pass to Right</button>
        </div>
    );

}