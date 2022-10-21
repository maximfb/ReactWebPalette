import React, { useReducer } from 'react';
import { LOCK, UPDATE } from '../types';
import { PaletteContext } from './paletteContext';
import { paletteReducer } from './paletteReducer';
import useColor from '../../hooks/useColor';

const PaletteStore = ({ children }) => {
    const initialState = [
        { id: 1, color: useColor.getRandomColor(), lock: false },
        { id: 2, color: useColor.getRandomColor(), lock: false },
        { id: 3, color: useColor.getRandomColor(), lock: false },
        { id: 4, color: useColor.getRandomColor(), lock: false },
        { id: 5, color: useColor.getRandomColor(), lock: false }
    ];
    const [ state, dispatch ] = useReducer(paletteReducer, initialState);
    const lockChange = id => {
        dispatch({
            type: LOCK,
            payload: id
        });
    };
    const update = () => {
        dispatch({ type: UPDATE });
    };

    return (
        <PaletteContext.Provider value={{ state, update, lockChange }}>
            {children}
        </PaletteContext.Provider>
    );
};

export default PaletteStore;