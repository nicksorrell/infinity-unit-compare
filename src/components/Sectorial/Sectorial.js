import React from 'react';

import axios from 'axios';

import n3Types from '../../data/n3Types';

import Unit from './Unit/Unit';

import UnitN4 from '../../utility/UnitN4';

import styles from './Sectorial.module.css';

class Sectorial extends React.Component {
    constructor(props) {
        super(props);
        this.n3SectorialUrl = './assets/json/' + this.props.id + '.json';
        this.n4SectorialUrl =
            'https://api.corvusbelli.com/army/units/en/' + this.props.id;
        this.isLoaded = false;
    }

    state = {
        sort: 'name',
        useInches: true
    };

    componentDidMount() {
        axios
            .all([
                axios.get(this.n3SectorialUrl),
                axios.get(this.n4SectorialUrl)
            ])
            .then(
                axios.spread((...responses) => {
                    const n3Response = responses[0];
                    const n4Response = responses[1];

                    this.props.loadCallback({
                        n3: n3Response.data.units,
                        n4: {
                            units: n4Response.data.units,
                            filters: n4Response.data.filters
                        }
                    });
                })
            );
    }

    render() {
        if (!this.props.data.isLoaded) {
            return <p>Loading...</p>;
        }

        let unitsN3 = this.props.data.unitsN3;

        // Some units have changed names and other data and need manual links defined
        const manualLinks = {
            1625: 1489,
            734: 257,
            1550: 1489,
            1549: 1489,
            1618: 1502,
            1155: 257,
            1156: 1524,
            257: 257,
            150: 150,
            128: 128,
            1251: 150,
            1252: 128,
            1616: 1502,
            1589: 150,
            308: 308,
            1325: 308,
            403: 403,
            474: 403,
            1510: 1551,
            1511: 1551,
            1531: 1550,
            1532: 1550,
            420: 420,
            1094: 420,
            501: 501,
            568: 501,
            1506: 1503,
            1507: 1503,
            1196: 198,
            984: 380,
            1383: 2,
            1426: 198,
            1427: 51,
            1438: 257
        };

        const sortBy = (sorting) => {
            this.setState({
                sort: sorting
            });

            if (sorting === 'name') {
                unitsN3 = unitsN3.sort((a, b) => {
                    if (a.ISC[0] > b.ISC[0]) return 1;
                    if (a.ISC[0] < b.ISC[0]) return -1;
                    return 0;
                });
            }

            if (sorting === 'type') {
                unitsN3.sort((a, b) => {
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
        };

        const useInches = (value) => {
            this.setState({
                useInches: value
            });
        };

        const createUnitList = unitsN3.map((unit) => {
            if (
                unit.perfiles[0].nombre &&
                unit.perfiles[0].nombre.includes('(Infinity Spec-Ops)')
            )
                return null;

            let unitType = n3Types.filter(
                (type) => type.id === unit.perfiles[0].tipo
            )[0].nombre;

            let unitExistsInN4 = manualLinks[unit.id.toString()]
                ? this.props.data.unitsN4.find(
                      (u) => u.id === manualLinks[unit.id.toString()]
                  )
                : null ||
                  this.props.data.unitsN4.find(
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
                                  this.props.selectedUnitId === unit.id
                                      ? styles.unitActive
                                      : null
                              ].join(' ')
                            : [styles.unit, styles.unitDisabled].join(' ')
                    }
                    onClick={() =>
                        this.props.unitClickHandler(unit.id, logoUrl)
                    }
                >
                    <img src={logoUrl} alt="" />
                    <span>{unit.ISC_abr ? unit.ISC_abr : unit.ISC}</span>
                    <div className={styles.unitType}>{unitType}</div>
                </div>
            );
        });

        let n4Unit = null;
        let n3Unit = null;

        if (this.props.selectedUnitId !== 0) {
            n3Unit = unitsN3.find((u) => u.id === this.props.selectedUnitId);
            n4Unit = manualLinks[n3Unit.id.toString()]
                ? this.props.data.unitsN4.find(
                      (unit) => unit.id === manualLinks[n3Unit.id.toString()]
                  )
                : null ||
                  this.props.data.unitsN4.find(
                      (unit) =>
                          unit.isc.toLowerCase() === n3Unit.ISC.toLowerCase()
                  ) ||
                  null;

            // EXPERIMENTAL FUNCTIONALITY TO BETTER FIND UNITS
            // MAY NEED TO JUST TAKE OUT AFTER USING IT TO IDENTIFY
            // MANUAL N3 => N4 ID LINKS DUE TO NAMES AND STUFF
            /*
            if (!n4Unit && n3Unit['ISC_abr'].length > 0) {
                n4Unit =
                    this.props.data.unitsN4.find((unit) =>
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
                                styles[`logo${this.props.id}`]
                            ].join(' ')}
                        ></div>
                        <p className={styles.title}>{this.props.name}</p>
                    </div>

                    <div className={styles.sorting}>
                        <p>Sorting:</p>
                        <div
                            className={[
                                styles.sortOption,
                                this.state.sort === 'name'
                                    ? styles.sortOptionActive
                                    : null
                            ].join(' ')}
                            onClick={() => sortBy('name')}
                        >
                            Name
                        </div>
                        <div
                            className={[
                                styles.sortOption,
                                this.state.sort === 'type'
                                    ? styles.sortOptionActive
                                    : null
                            ].join(' ')}
                            onClick={() => sortBy('type')}
                        >
                            Type
                        </div>
                    </div>

                    <div className={styles.sorting}>
                        <p>Units:</p>
                        <div
                            className={[
                                styles.sortOption,
                                this.state.useInches
                                    ? styles.sortOptionActive
                                    : null
                            ].join(' ')}
                            onClick={() => useInches(true)}
                        >
                            1"
                        </div>
                        <div
                            className={[
                                styles.sortOption,
                                !this.state.useInches
                                    ? styles.sortOptionActive
                                    : null
                            ].join(' ')}
                            onClick={() => useInches(false)}
                        >
                            1 cm
                        </div>
                    </div>

                    {createUnitList}
                </div>
                <div className={styles.details}>
                    {/* {this.props.selectedUnitId} (N3) | {n4Unit ? n4Unit.id : 0}{' '}
                    (N4) */}
                    <div className={styles.unitCompare}>
                        {n3Unit ? (
                            <Unit
                                data={
                                    new UnitN4(
                                        unitsN3.find(
                                            (u) =>
                                                u.id ===
                                                this.props.selectedUnitId
                                        ),
                                        { convertFromN3: true }
                                    )
                                }
                                useInches={this.state.useInches}
                                logoUrl={this.props.selectedUnitLogoUrl}
                                sectorialId={this.props.id}
                            />
                        ) : null}
                        {n4Unit ? (
                            <Unit
                                data={
                                    new UnitN4(n4Unit, {
                                        filtersN4: this.props.data.filtersN4
                                    })
                                }
                                useInches={this.state.useInches}
                                logoUrl={this.props.selectedUnitLogoUrl}
                                sectorialId={this.props.id}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Sectorial;
