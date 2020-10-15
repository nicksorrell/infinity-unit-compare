import React from 'react';

import styles from './Profile.module.css';

const Profile = (props) => {
    const profile = props.data;

    const characteristics = profile.chars.map((char, index) => {
        if ([1, 3, 4, 6, 7, 20, 21, 23, 27].includes(char.id)) {
            return (
                <div
                    key={index}
                    className={[styles.char, styles['char' + char.id]].join(
                        ' '
                    )}
                    title={char.name}
                ></div>
            );
        }

        return null;
    });

    const equipment = profile.equip.map((item, index) => {
        const extra =
            item.extra && item.extra.length > 0
                ? ` (${item.extra[0].name})`
                : null;

        return (
            <div key={`equip-${index}`} className={styles.item}>
                {item.name}
                {item.extra ? extra : null}
            </div>
        );
    });

    const skills = profile.skills.map((item, index) => {
        const useInches = props.useInches;
        let extra = null;

        if (item.name === 'Dodge' || item.name === 'Forward Deployment') {
            if (item.extra && item.extra.length > 0) {
                extra = item.extra[0].name.includes('PH')
                    ? ` (${item.extra[0].name})`
                    : ` (${
                          useInches
                              ? '+' +
                                Math.ceil(+item.extra[0].name * 0.39) +
                                (useInches ? '"' : ' cm')
                              : item.extra[0].name + (useInches ? '"' : ' cm')
                      })`;
            }
        } else {
            extra =
                item.extra && item.extra.length > 0
                    ? ` (${item.extra[0].name})`
                    : null;
        }

        return (
            <div key={`equip-${index}`} className={styles.item}>
                {item.name}
                {item.extra ? extra : null}
            </div>
        );
    });

    return (
        <div className={props.className}>
            <div className={styles.chars}>
                <div className={[styles.char, styles.type].join(' ')}>
                    {profile.type}
                </div>
                {characteristics}
            </div>
            <div
                className={[
                    styles.data,
                    styles[`data${props.sectorialId}`]
                ].join(' ')}
            >
                <div className={styles.profileName}>{profile.name}</div>

                <div
                    className={[
                        styles.attributes,
                        styles[`attributes${props.sectorialId}`]
                    ].join(' ')}
                >
                    <img
                        src={props.logoUrl}
                        width="75"
                        height="75"
                        alt=""
                        className={styles.logo}
                    ></img>
                    <div className={styles.attributeRow}>
                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>MOV</div>
                            <div className={styles.attributeValue}>
                                {props.useInches
                                    ? Math.ceil(profile.move[0] * 0.39)
                                    : profile.move[0]}
                                -
                                {props.useInches
                                    ? Math.ceil(profile.move[1] * 0.39)
                                    : profile.move[1]}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>CC</div>
                            <div className={styles.attributeValue}>
                                {profile.cc}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>BS</div>
                            <div className={styles.attributeValue}>
                                {profile.bs}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>PH</div>
                            <div className={styles.attributeValue}>
                                {profile.ph}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>WIP</div>
                            <div className={styles.attributeValue}>
                                {profile.wip}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>ARM</div>
                            <div className={styles.attributeValue}>
                                {profile.arm}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>BTS</div>
                            <div className={styles.attributeValue}>
                                {profile.bts}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>W</div>
                            <div className={styles.attributeValue}>
                                {profile.w}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>S</div>
                            <div className={styles.attributeValue}>
                                {profile.s}
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <div className={styles.attributeHeader}>AVA</div>
                            <div className={styles.attributeValue}>
                                {profile.ava === 255 ? 'Total' : profile.ava}
                            </div>
                        </div>
                    </div>
                </div>

                {equipment.length > 0 ? (
                    <div className={styles.equipment}>
                        <span className={styles.bold}>Equipment:</span>{' '}
                        {equipment}
                    </div>
                ) : null}

                {skills.length > 0 ? (
                    <div className={styles.skills}>
                        <span className={styles.bold}>Special Skills:</span>
                        {skills}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Profile;
