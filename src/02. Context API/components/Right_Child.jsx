import React, { useContext } from 'react';
import {Context} from "./context/OwnerContext"

export default function Right_Child({owner = null}) {

    const context = useContext(Context);

    const onClickChildToParent = () => {
        if(context.owner == 'right')
            context.setOwner('parent');
    };

    const onClickRightToLeft = () => {
        if(context.owner == 'right')
            context.setOwner('left');
    };

    return(
        <div className={'child'}>
            <button onClick={onClickChildToParent} className={'btn-to-parent'}>Pass to Parent</button>
            <br/>
            Left Child
            <br/>
            <div className={'ball'} style={{visibility: context.owner == 'right' ? 'unset' :'hidden'}}>ball</div>
            <button onClick={onClickRightToLeft} className={'btn-right-to-left'}>Pass to Left</button>
        </div>
    );

}