import React, { createContext, useContext, useReducer } from 'react';

//prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the data layer to all the components
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer in the components
export const useStateValue = () => useContext(StateContext);