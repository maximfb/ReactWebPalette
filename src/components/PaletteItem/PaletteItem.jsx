import React, { useContext, useEffect, useMemo } from 'react';
import { AlertContext } from '../../store/alert/alertContext';
import useColor from '../../hooks/useColor';
import styles from './PaletteItem.module.scss';
import copyToClick from '../../utils/copy';
import { PaletteContext } from '../../store/palette/paletteContext';

const PaletteItem = (props) => {
    const { show } = useContext(AlertContext);
    const { state: palette } = useContext(PaletteContext);
    // eslint-disable-next-line
    const isNewColor = useMemo(() => props.color, [ palette ]);

    // eslint-disable-next-line
    useEffect(() => props.updateColors(isNewColor), [ isNewColor ]);
    // useEffect(() => props.updateColors(props.color), [ palette ]);

    const copy = text => copyToClick(text)
        .then(() => show('Copied!', 'info', 800));

    return (
        <div style={{ backgroundColor: props.color }} className={styles.palette__col}>
            <h1
                style={{ color: useColor.getLuminanceColor(props.color) }}
                onClick={() => copy(props.color)}
            >
                {props.color || ''}
            </h1>
            <button type="button" onClick={() => props.lockChange(props.id)}>
                <i
                    style={{ color: useColor.getLuminanceColor(props.color) }}
                    className={`fa-solid ${props.lock ? 'fa-lock' : 'fa-lock-open'}`}>
                </i>
            </button>
        </div>
    );
};

export default PaletteItem;