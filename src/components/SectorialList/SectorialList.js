import React from 'react';

import styles from './SectorialList.module.css';

function SectorialList (props) {
    if (props.sectorialId === 0) {
        return (
            <div className={styles.sectorialList}>
                <div className={styles.instructions}>
                    <div className={styles.instructionsHeader}>
                        Infinity N3/4 Army Comparer
                    </div>
                    <p>
                        Welcome! This app helps identify changes to units in N4 in a format styled after the official Infinity Army app with data directly from the CB servers.
                    </p>
                    <p>
                        Find your faction the same way as you would in the
                        official app. When you select a unit, the N3 and N4 versions will load
                        side by side for easy comparison.
                    </p>
                </div>
            </div>
        );
    }

    const sectorialList = props.factions.filter(
        (sectorial) => sectorial.parent === props.sectorialId
    );

    const sectorials = sectorialList.map((sectorial) => {
        return (
            <div
                className={[
                    styles.sectorial,
                    styles[`sectorial${sectorial.id}`]
                ].join(' ')}
                key={sectorial.id}
                onClick={() => props.sectorialClickHandler(sectorial.id)}
            >
                <div className={styles.logo}></div>
                <div className={styles.name}>{sectorial.name}</div>
            </div>
        );
    });

    return <div className={styles.sectorialList}>{sectorials}</div>;
};

export default SectorialList;
