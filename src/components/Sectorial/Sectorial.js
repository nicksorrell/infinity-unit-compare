import React, { useState, useEffect } from 'react';

import axios from 'axios';

import n3Types from '../../data/n3Types';

import Unit from './Unit/Unit';

import manualLinks from '../../utility/manualLinks';
import UnitN4 from '../../utility/UnitN4';

import styles from './Sectorial.module.css';

function Sectorial(props) {
    const n3SectorialUrl = './assets/json/' + props.id + '.json';
    const n4SectorialUrl =
        'https://api.corvusbelli.com/army/units/en/' + props.id;

    const [isLoaded, setIsLoaded] = useState('false');
    const [sorting, setSorting] = useState('name');
    const [useInches, setUseInches] = useState(true);
    const [data, setData] = useState({
        unitsN3: [],
        unitsN4: [],
        filtersN4: {}
    });

    useEffect(() => {
        axios.all([axios.get(n3SectorialUrl), axios.get(n4SectorialUrl)]).then(
            axios.spread((...responses) => {
                const n3Response = responses[0];
                const n4Response = responses[1];

                setData({
                    unitsN3: n3Response.data.units,
                    unitsN4: n4Response.data.units,
                    filtersN4: n4Response.data.filters
                });

                setIsLoaded(true);
            })
        );
    }, [n3SectorialUrl, n4SectorialUrl]);

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    if (sorting === 'name') {
        data.unitsN3 = data.unitsN3.sort((a, b) => {
            if (a.ISC[0] > b.ISC[0]) return 1;
            if (a.ISC[0] < b.ISC[0]) return -1;
            return 0;
        });
    }

    if (sorting === 'type') {
        data.unitsN3.sort((a, b) => {
            if (a.perfiles[0].tipo > b.perfiles[0].tipo) {
                return 1;
            } else if (a.perfiles[0].tipo < b.perfiles[0].tipo) {
                return -1;
            }

            if (a.ISC[0] > b.ISC[0]) {
                return 1;
            } else if (a.ISC[0] < b.ISC[0]) {
                return -1;
            }

            return 0;
        });
    }

    const createUnitList = data.unitsN3.map((unit) => {
        if (
            unit.perfiles[0].nombre &&
            unit.perfiles[0].nombre.includes('(Infinity Spec-Ops)')
        )
            return null;

        let unitType = n3Types.filter(
            (type) => type.id === unit.perfiles[0].tipo
        )[0].nombre;

        let unitExistsInN4 = manualLinks[unit.id.toString()]
            ? data.unitsN4.find((u) => u.id === manualLinks[unit.id.toString()])
            : null ||
              data.unitsN4.find(
                  (u) => u.isc.toLowerCase() === unit.ISC.toLowerCase()
              ) ||
              null;

        let logoUrl = `https://assets.infinitythegame.net/infinityarmy/img/logos/logos_${unit.idFaccion}/logo_${unit.IDArmy}.svg`;
        return (
            <div
                key={unit.id}
                className={
                    unitExistsInN4
                        ? [
                              styles.unit,
                              props.selectedUnitId === unit.id
                                  ? styles.unitActive
                                  : null
                          ].join(' ')
                        : [styles.unit, styles.unitDisabled].join(' ')
                }
                onClick={() => props.unitClickHandler(unit.id, logoUrl)}
            >
                <img src={logoUrl} alt="" />
                <span>{unit.ISC_abr ? unit.ISC_abr : unit.ISC}</span>
                <div className={styles.unitType}>{unitType}</div>
            </div>
        );
    });

    let n4Unit = null;
    let n3Unit = null;

    if (props.selectedUnitId !== 0) {
        n3Unit = data.unitsN3.find((u) => u.id === props.selectedUnitId);
        n4Unit = manualLinks[n3Unit.id.toString()]
            ? data.unitsN4.find(
                  (unit) => unit.id === manualLinks[n3Unit.id.toString()]
              )
            : null ||
              data.unitsN4.find(
                  (unit) => unit.isc.toLowerCase() === n3Unit.ISC.toLowerCase()
              ) ||
              null;

        // EXPERIMENTAL FUNCTIONALITY TO BETTER FIND UNITS
        // MAY NEED TO JUST TAKE OUT AFTER USING IT TO IDENTIFY
        // MANUAL N3 => N4 ID LINKS DUE TO NAMES AND STUFF
        /*
        if (!n4Unit && n3Unit['ISC_abr'].length > 0) {
            n4Unit =
                data.unitsN4.find((unit) =>
                    unit.iscAbbr
                        ? unit.iscAbbr.includes(n3Unit['ISC_abr'])
                        : null
                ) || null;
        }
        */
    }

    return (
        <div className={styles.main}>
            <div className={styles['unit-list']}>
                <div className={styles.titlePane}>
                    <div
                        className={[
                            styles.logo,
                            styles[`logo${props.id}`]
                        ].join(' ')}
                    ></div>
                    <p className={styles.title}>{props.name}</p>
                </div>

                <div className={styles.sorting}>
                    <p>Sorting:</p>
                    <div
                        className={[
                            styles.sortOption,
                            sorting === 'name' ? styles.sortOptionActive : null
                        ].join(' ')}
                        onClick={() => setSorting('name')}
                    >
                        Name
                    </div>
                    <div
                        className={[
                            styles.sortOption,
                            sorting === 'type' ? styles.sortOptionActive : null
                        ].join(' ')}
                        onClick={() => setSorting('type')}
                    >
                        Type
                    </div>
                </div>

                <div className={styles.sorting}>
                    <p>Units:</p>
                    <div
                        className={[
                            styles.sortOption,
                            useInches ? styles.sortOptionActive : null
                        ].join(' ')}
                        onClick={() => setUseInches(true)}
                    >
                        1"
                    </div>
                    <div
                        className={[
                            styles.sortOption,
                            !useInches ? styles.sortOptionActive : null
                        ].join(' ')}
                        onClick={() => setUseInches(false)}
                    >
                        1 cm
                    </div>
                </div>

                {createUnitList}
            </div>
            <div className={styles.details}>
                {/* {props.selectedUnitId} (N3) | {n4Unit ? n4Unit.id : 0}{' '}
                    (N4) */}
                <div className={styles.unitCompare}>
                    {n3Unit ? (
                        <Unit
                            data={
                                new UnitN4(
                                    data.unitsN3.find(
                                        (u) => u.id === props.selectedUnitId
                                    ),
                                    { convertFromN3: true }
                                )
                            }
                            useInches={useInches}
                            logoUrl={props.selectedUnitLogoUrl}
                            sectorialId={props.id}
                        />
                    ) : null}
                    {n4Unit ? (
                        <Unit
                            data={
                                new UnitN4(n4Unit, {
                                    filtersN4: data.filtersN4
                                })
                            }
                            useInches={useInches}
                            logoUrl={props.selectedUnitLogoUrl}
                            sectorialId={props.id}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
export default Sectorial;
