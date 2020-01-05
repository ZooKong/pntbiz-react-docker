import React from 'react';

export default function Right_Child({owner , setOwner}) {

    const onClickChildToParent = () => {
        if(owner == 'right')
            setOwner('parent');
    };

    const onClickRightToLeft = () => {
        if(owner == 'right')
            setOwner('left');
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

}