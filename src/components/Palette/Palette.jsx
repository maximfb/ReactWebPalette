import React, { useContext, useEffect } from 'react';
import PaletteItem from '../PaletteItem/PaletteItem';
import styles from './Palette.module.scss';
import { PaletteContext } from '../../store/palette/paletteContext';

const Palette = () => {
    const { state: palette, update, lockChange } = useContext(PaletteContext);
    useEffect(() => {
        document.addEventListener('keydown', e => {
            e.preventDefault();
            if (e.code.toLowerCase() === 'space') update();
        });
        // eslint-disable-next-line
    }, []);
    return (
        <div className={styles.palette}>
            {palette.map(i =>
                <PaletteItem
                    key={i.id}
                    id={i.id}
                    color={i.color}
                    lock={i.lock}
                    lockChange={lockChange}
                />
            )}
        </div>
    );
};

export default Palette;