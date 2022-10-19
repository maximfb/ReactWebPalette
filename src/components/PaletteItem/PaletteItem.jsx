import React, { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import styles from './PaletteItem.module.scss';

const PaletteItem = () => {
    const [color, setColor] = useState(null);
    const [luminanceColor, setLuminanceColor] = useState(null);

    useEffect(() => setColor(getRandomColor), []);
    useEffect(() => getLuminanceColor(color), [color]);
    
    const getRandomColor = () => chroma.random().hex()
    const getLuminanceColor = color => {
        if (!color) return
        const luminance = chroma(color).luminance();
        return luminance > 0.5 ? setLuminanceColor('#000000') : setLuminanceColor('#FFFFFF');
    };

    return (
        <div style={{backgroundColor: color}} className={styles.palette__col}>
            <h1 style={{color: luminanceColor}}>{color || ''}</h1>
            <button type='button'>
                <i 
                    style={{color: luminanceColor}} 
                    className="fa-solid fa-lock">
                </i>
            </button>
        </div>
    );
};

export default PaletteItem;