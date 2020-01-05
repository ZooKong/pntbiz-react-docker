import React , {useState} from 'react';
import Left_Child from "./Left_Child";
import Right_Child from "./Right_Child";

export default function Parent() {

    const [owner , setOwner] = useState('parent');

    const onClickParentToLeft = () => {
        if(owner == 'parent')
            setOwner('left');
    };

    const onClickParentToRight = () => {
        if(owner == 'parent')
            setOwner('right');
    };

    return(
        <table className={'parent-table'}>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        Parent
                        <br/>
                        <div className={'ball'} style={{visibility: owner == 'parent' ? 'unset' :'hidden'}}>ball</div>
                        <br/>
                        <button onClick={onClickParentToLeft} className={'btn-parent-to-left'}>Pass to Left_Child</button>
                        <button onClick={onClickParentToRight} className={'btn-parent-to-right'}>Pass to Right_Child</button>
                    </td>
                </tr>
                <tr>
                    <td className={'left-table'}>
                        <Left_Child owner={owner} setOwner={setOwner}/>
                    </td>
                    <td className={'right-table'}>
                        <Right_Child owner={owner} setOwner={setOwner}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}