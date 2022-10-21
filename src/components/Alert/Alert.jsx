import React, { useContext } from 'react';
import styles from './Alert.module.scss';
import { AlertContext } from '../../store/alert/alertContext';

const Alert = () => {
    const { state: alert } = useContext(AlertContext);
    if (!alert.visible) return;

    return (
        <div className={`${styles.alert} alert-${alert.type || 'default'}`}>
            {alert.text}
        </div>
    );
};

export default Alert;
