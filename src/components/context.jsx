import React, { createContext } from 'react';
import translations from '../translations/translations';

export const LangContext = createContext()


const Context = ({langKey, children}) => {
    const t = translations(langKey)
    return (
        <LangContext.Provider value={{
           langKey,
           t
        }}>
            {children}
        </LangContext.Provider>
    );
};

export default Context;