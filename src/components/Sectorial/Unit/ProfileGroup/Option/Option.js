import React from 'react';

import styles from './Option.module.css';

const Option = (props) => {
    const option = props.data;
    const weaponsListBS = [];
    const weaponsListCC = [];
    const equipmentList = [];
    const peripheralList = [];
    const nameExtras = [];
    let name = option.name;

    if (option.skills.length > 0) {
        const useInches = props.useInches;
        for (let skill of option.skills) {
            let skillExtra = skill.name;

            if (skill.name === 'Forward Deployment') {
                if (skill.extra && skill.extra.length > 0) {
                    skillExtra += ` [${
                        useInches
                            ? '+' + Math.ceil(+skill.extra[0].name * 0.39) +
                              (useInches ? '"' : ' cm')
                            : skill.extra[0].name + (useInches ? '"' : ' cm')
                    }]`;
                }
            } else {
                if (skill.extra && skill.extra.length > 0) {
                    skillExtra += ` [${skill.extra[0].name}]`;
                }
            }

            nameExtras.push(skillExtra);
        }
    }

    if (option.equip.length > 0) {
        for (let equip of option.equip) {
            if (props.isN3) {
                nameExtras.push(equip.name);
            }
        }
    }

    if (nameExtras.length > 0) {
        name += ` (${nameExtras.join(', ')})`;
    }

    for (let weapon of option.weapons) {
        let wep = weapon.name;

        if (wep === '') continue;

        wep +=
            weapon.extra && weapon.extra.length > 0
                ? ` (${weapon.extra[0].name})`
                : '';

        if (weapon.type === 'BS') {
            weaponsListBS.push(wep);
        } else {
            weaponsListCC.push(wep);
        }
    }

    for (let equip of option.equip) {
        let equipment = equip.name;

        if (equipment === '') continue;

        equipmentList.push(equipment);
    }

    for (let peripheral of option.peripheral) {
        let periph = peripheral.name;

        if (periph === '') continue;

        peripheralList.push(periph);
    }

    const weaponsBS = weaponsListBS.map((weapon, index) => {
        return (
            <div key={`weapon-bs-${index}`} className={styles.item}>
                {weapon}
            </div>
        );
    });

    const equipment = equipmentList.map((equip, index) => {
        return (
            <div key={`equip-${index}`} className={styles.item}>
                {equip}
            </div>
        );
    });

    const peripherals = peripheralList.map((peripheral, index) => {
        return (
            <div key={`peripheral-${index}`} className={styles.item}>
                {peripheral}
            </div>
        );
    });

    const weaponsCC = weaponsListCC.map((weapon, index) => {
        return (
            <div key={`weapon-cc-${index}`} className={styles.item}>
                {weapon}
            </div>
        );
    });

    const equipDivider = (() => (
        <div className={[styles.item, styles.divider].join(' ')}>|</div>
    ))();

    const peripheralDivider = (() => (
        <div className={[styles.item, styles.divider].join(' ')}>||</div>
    ))();

    return (
        <div className={props.className}>
            <div className={styles.row}>
                <div className={styles.nameColumn}>{name}</div>
                <div className={styles.gearColumn}>
                    {weaponsBS}
                    {equipment.length > 0 ? equipDivider : null}
                    {equipment}
                    {peripherals.length > 0 ? peripheralDivider : null}
                    {peripherals}
                </div>
                <div className={styles.meleeColumn}>{weaponsCC}</div>
                <div className={styles.swcColumn}>{option.swc}</div>
                <div className={styles.costColumn}>{option.points}</div>
            </div>
        </div>
    );
};

export default Option;
