import React from 'react';
import Root_01 from "./01. Parameters&Callback/Root";
import Root_02 from "./02. Context API/Root";
import Root_03 from "./03. Redux/Root";
import Root_04 from "./04. Mobx/Root";

export default function RootContainer() {
    return(
        <>
            1. 단방향 props 전달 및 부모 컴포넌트의 Call Back 함수
            <Root_01/>
            <hr/>
            2. Context API를 활용한 전역상태 관리
            <Root_02/>
            <hr/>
            3. Redux를 활용한 전역상태 관리
            <Root_03/>
            <hr/>
            4. MobX를 활용한 전역상태 관리
            <Root_04/>
            <hr/>
        </>
    );
}