import React from 'react';
import PaletteItem from '../PaletteItem/PaletteItem';
import styles from './Palette.module.scss';

const Palette = () => {
    return (
        <div className={styles.palette}>
            <PaletteItem/>
            <PaletteItem/>
            <PaletteItem/>
            <PaletteItem/>
            <PaletteItem/>
            <PaletteItem/>
        </div>
    );
};

export default Palette;