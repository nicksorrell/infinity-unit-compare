import React from 'react';

import Profile from './Profile/Profile';
import Option from './Option/Option';

import styles from './ProfileGroup.module.css';

function ProfileGroup (props) {
    const profiles = props.data.profiles.map((profile, index) => {
        return (
            <Profile
                key={`profile-${index}`}
                className={styles.profile}
                data={profile}
                isN3={props.isN3}
                useInches={props.useInches}
                logoUrl={props.logoUrl}
                sectorialId={props.sectorialId}
            />
        );
    });

    const options = props.data.options.map((option, index) => {
        return (
            <Option
                key={`option-${index}`}
                className={styles.option}
                data={option}
                useInches={props.useInches}
                isN3={props.isN3}
            />
        );
    });

    return (
        <div className={styles.group}>
            <div className={styles.profiles}>{profiles}</div>

            <div className={styles.options}>
                <div className={styles.optionsHeader}>
                    <div className={styles.headerNameColumn}>Name</div>
                    <div className={styles.headerGearColumn}>
                        {props.isN3 ? 'BS Weapons' : 'Armament | Equipment || Peripheral'}
                    </div>
                    <div className={styles.headerMeleeColumn}>
                        {props.isN3 ? 'CC Weapons' : 'Melee Weapons'}
                    </div>
                    <div className={styles.headerSwcColumn}>SWC</div>
                    <div className={styles.headerCostColumn}>C</div>
                </div>
                {options}
            </div>
        </div>
    );
};

export default ProfileGroup;
