import React from 'react';

import ProfileGroup from './ProfileGroup/ProfileGroup';

import styles from './Unit.module.css';

const Unit = (props) => {
    if (props.data === null) {
        return null;
    }

    const unit = props.data;

    const profileGroups = unit.profileGroups.map((group, index) => {
        return (
            <ProfileGroup
                key={index}
                data={group}
                isN3={unit.n3}
                logoUrl={props.logoUrl}
                sectorialId={props.sectorialId}
                useInches={props.useInches}
            />
        );
    });

    return (
        <div className={styles.pane}>
        <div className={styles.version}>{props.data.n3 ? 'N3' : 'N4'}</div>
        <div className={styles.wrapper}>
            <div className={styles.isc}>ISC: {unit.isc}</div>
            {profileGroups}
            {unit.notes ? <div className={styles.notes}><span>{unit.notes}</span></div> : null}
        </div>
        </div>
    );
};

export default Unit;
