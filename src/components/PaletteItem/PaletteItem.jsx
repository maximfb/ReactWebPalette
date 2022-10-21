import React, { useContext } from 'react';
import { AlertContext } from '../../store/alert/alertContext';
import useColor from '../../hooks/useColor';
import styles from './PaletteItem.module.scss';
import copyToClick from '../../utils/copy';

const PaletteItem = (props) => {
    const { show } = useContext(AlertContext);
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