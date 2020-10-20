import React, { useState, useEffect } from 'react';
import axios from 'axios';

import n3Factions from '../../data/n3Factions';

import Header from '../Header/Header';
import SectorialList from '../SectorialList/SectorialList';
import Sectorial from '../Sectorial/Sectorial';

import styles from './UnitComparer.module.css';

function UnitComparer() {
    const n3Metadata = {
        factions: n3Factions
    };

    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedArmy, setSelectedArmy] = useState({
        selectedFactionId: 0,
        selectedSectorialId: 0
    });
    const [selectedUnit, setSelectedUnit] = useState({
        id: 0,
        logoUrl: ''
    });
    const [n4Metadata, setN4Metadata] = useState({
        factions: {},
        equipment: {},
        weapons: {},
        skills: {},
        isLoaded: false
    });
    const [currentSectorial, setCurrentSelectorial] = useState({
        isLoaded: false,
        unitsN3: [],
        unitsN4: [],
        filtersN4: {}
    });

    useEffect(() => {
        axios
            .get('https://api.corvusbelli.com/army/infinity/en/metadata')
            .then((response) => {
                setN4Metadata({
                    factions: response.data.factions,
                    equipment: response.data.equips,
                    skills: response.data.skills,
                    weapons: response.data.weapons
                });
                setIsLoaded(true);
            });
    });

    const getParentFactions = (factionArray) => {
        let factions = [];

        for (let faction of factionArray) {
            if (faction.id === faction.parent || faction.id === 901) {
                factions.push({
                    id: faction.id !== 901 ? faction.parent : 901,
                    name: faction.name
                });
            }
        }

        return factions;
    };

    const factionClickHandler = (factionId) => {
        setSelectedArmy({
            selectedFactionId: factionId,
            selectedSectorialId: 0
        });
    };

    const sectorialClickHandler = (sectorialId) => {
        setSelectedArmy({
            selectedSectorialId: sectorialId,
            selectedFactionId: 0
        });
        setSelectedUnit({
            id: 0
        });
    };

    const sectorialLoadedCallback = (data) => {
        setCurrentSelectorial({
            isLoaded: true,
            unitsN3: data.n3.sort((a, b) => {
                if (a.ISC[0] > b.ISC[0]) return 1;
                if (a.ISC[0] < b.ISC[0]) return -1;
                return 0;
            }),
            unitsN4: data.n4.units,
            filtersN4: data.n4.filters
        });
    };

    const unitClickHandler = (unitId, logoUrl) => {
        setSelectedUnit({
            id: unitId,
            logoUrl: logoUrl
        });
    };

    const getAppSection = () => {
        if (selectedArmy.selectedSectorialId === 0) {
            return (
                <SectorialList
                    sectorialId={selectedArmy.selectedFactionId}
                    factions={n3Metadata.factions}
                    sectorialClickHandler={sectorialClickHandler}
                />
            );
        }

        let sectorialName = n3Factions.filter(
            (faction) => faction.id === selectedArmy.selectedSectorialId
        )[0].name;

        return (
            <Sectorial
                id={selectedArmy.selectedSectorialId}
                name={sectorialName}
                data={currentSectorial}
                n4Metadata={n4Metadata}
                selectedUnitId={selectedUnit.id}
                selectedUnitLogoUrl={selectedUnit.logoUrl}
                unitClickHandler={unitClickHandler}
                loadCallback={sectorialLoadedCallback}
            />
        );
    };

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    let factions = getParentFactions(n3Metadata.factions);
    let appSection = getAppSection();

    return (
        <div className={styles.main}>
            <Header
                onHome={selectedArmy.selectedSectorialId === 0}
                factionClickHandler={factionClickHandler}
                factions={factions}
            />
            <div className={styles.section}>{appSection}</div>
            <div className={styles.info}>
                <p className={styles.infoTitle}>
                    Infinity N3/4 Army Comparer v0.1
                </p>
                <p className={styles.infoMessage}>
                    Feel free to give feedback to <b>Nix#1337</b> on the
                    r/infinitythegame Discord server!
                </p>
                <p className={styles.infoMessage}>
                    This is an unofficial application based on <i>Infinity</i>,
                    © 2020 Corvus Belli S.L.
                </p>
            </div>
        </div>
    );
}

export default UnitComparer;
