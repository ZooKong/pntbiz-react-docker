import React from 'react';

export default function Left_Child({owner , setOwner}) {

    const onClickChildToParent = () => {
        if(owner == 'left')
            setOwner('parent');
    };

    const onClickLeftToRight = () => {
        if(owner == 'left')
            setOwner('right');
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
}