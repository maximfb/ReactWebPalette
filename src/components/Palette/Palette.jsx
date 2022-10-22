import React, { useContext, useEffect, useState } from 'react';
import PaletteItem from '../PaletteItem/PaletteItem';
import styles from './Palette.module.scss';
import { PaletteContext } from '../../store/palette/paletteContext';
import { setHash } from '../../utils/hash';

const Palette = () => {
    const { state: palette, update, lockChange } = useContext(PaletteContext);
    const [ colors, setColors ] = useState([]);

    useEffect(() => setColors(palette.map(i => i.color)), [ palette ])
    useEffect(() => {
        setHash(colors);
        document.addEventListener('keydown', e => {
            e.preventDefault();
            if (e.code.toLowerCase() === 'space') {
                setColors([]);
                update();
            }
        });
        // eslint-disable-next-line
    }, []);
    useEffect(() => setHash(colors, '-'), [ colors ]);

    const updateColors = (color) => setColors(prev => [ ...prev, color ]);

    return (
        <div className={styles.palette}>
            {palette.map(i =>
                <PaletteItem
                    key={i.id}
                    id={i.id}
                    color={i.color}
                    lock={i.lock}
                    lockChange={lockChange}
                    updateColors={updateColors}
                />
            )}
        </div>
    );
};

export default Palette;