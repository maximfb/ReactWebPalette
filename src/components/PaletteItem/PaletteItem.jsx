import React from 'react';
import useColor from '../../hooks/useColor';
import styles from './PaletteItem.module.scss';

const PaletteItem = (props) => {
    return (
        <div style={{backgroundColor: props.color}} className={styles.palette__col}>
            <h1 style={{color: useColor.getLuminanceColor(props.color)}}>{props.color || ''}</h1>
            <button type='button' onClick={() => props.lockChange(props.id)}>
                <i 
                    style={{color: useColor.getLuminanceColor(props.color)}} 
                    className={`fa-solid ${props.lock ? 'fa-lock' : 'fa-lock-open'}`}>
                </i>
            </button>
        </div>
    );
};

export default PaletteItem;