import React, { createContext, useReducer } from 'react';

export const EventContext = createContext();

export const initialState = {
    events: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_EVENT':
            return {
                ...state,
                events: [...state.events, action.event],
            };
        case 'EDIT_EVENT':
            return {
                ...state,
                events: state.events.map(event =>
                    event.id === action.event.id ? action.event : event
                ),
            };
        case 'DELETE_EVENT':
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.id),
            };
        default:
            return state;
    }
}

export const EventProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <EventContext.Provider value={{ state, dispatch }}>
            {children}
        </EventContext.Provider>
    );
};
