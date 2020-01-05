import React ,{ createContext , useState } from 'react';

const Context = createContext({
    owner : undefined,
    setOwner : undefined
});

export default function OwnerContext({children}) {

    const [owner , setOwner] = useState('parent');

    return(
        <Context.Provider value={{owner : owner , setOwner : setOwner}}>
            {children}
        </Context.Provider>
    );
};

export {Context};