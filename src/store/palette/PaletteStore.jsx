import React, { useReducer } from 'react';
import { LOCK, UPDATE } from '../types';
import { PaletteContext } from './paletteContext';
import { paletteReducer } from './paletteReducer';
import useColor from '../../hooks/useColor';
import getHash from '../../utils/hash';
import { getColorsOfHash } from '../../utils/color';

const PaletteStore = ({ children }) => {
    const colorsHash = getHash();
    const initialState = [
        { id: 1, color: colorsHash.length > 1 ? getColorsOfHash(colorsHash, '-', 0) : useColor.getRandomColor(), lock: false },
        { id: 2, color: colorsHash.length > 1 ? getColorsOfHash(colorsHash, '-', 1) : useColor.getRandomColor(), lock: false },
        { id: 3, color: colorsHash.length > 1 ? getColorsOfHash(colorsHash, '-', 2) : useColor.getRandomColor(), lock: false },
        { id: 4, color: colorsHash.length > 1 ? getColorsOfHash(colorsHash, '-', 3) : useColor.getRandomColor(), lock: false },
        { id: 5, color: colorsHash.length > 1 ? getColorsOfHash(colorsHash, '-', 4) : useColor.getRandomColor(), lock: false }
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