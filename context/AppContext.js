import React, { createContext, useState } from 'react';


export const AppContext = createContext();


export const AppProvider = ({ children }) => {
    const [spotId, setSpotId] = useState('');

    const contextValue = {
        spotId,
        setSpotId
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};