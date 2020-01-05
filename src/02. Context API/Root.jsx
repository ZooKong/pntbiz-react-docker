import React from 'react';
import Parent from "./components/Parent";
import OwnerContext from "./components/context/OwnerContext"
import '../app.css';

export default function Root() {
    return(
        <OwnerContext>
            <Parent/>
        </OwnerContext>
    );

}