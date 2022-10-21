import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';
import { HIDE, SHOW } from '../types';

const AlertStore = ({ children }) => {
    const initialState = { text: '', type: 'default', visible: false };
    const [ state, dispatch ] = useReducer(alertReducer, initialState);
    console.log(state);
    const show = (text, type, ms = 3000) => {
        dispatch({
            type: SHOW,
            payload: { text, type }
        });
        setTimeout(() => {
            hide();
        }, ms);
    };
    const hide = () => dispatch({ type: HIDE });

    return (
        <AlertContext.Provider value={{ state, show, hide }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertStore;
