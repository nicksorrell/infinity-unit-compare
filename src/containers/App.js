import React from 'react';
import axios from 'axios';

import n3Factions from '../data/n3Factions';

import Header from '../components/Header/Header';
import SectorialList from '../components/SectorialList/SectorialList';
import Sectorial from '../components/Sectorial/Sectorial';

import styles from './App.module.css';

class App extends React.Component {
    state = {
        selectedFactionId: 0,
        selectedSectorialId: 0,
        selectedUnitId: 0,
        selectedUnitLogoUrl: '',
        currentSectorial: {
            isLoaded: false,
            unitsN3: [],
            unitsN4: [],
            filtersN4: {}
        },
        n3Metadata: {
            factions: n3Factions
        },
        n4Metadata: {
            factions: {},
            equipment: {},
            weapons: {},
            skills: {},
            isLoaded: false
        }
    };

    componentDidMount() {
        axios
            .get('https://api.corvusbelli.com/army/infinity/en/metadata')
            .then((response) => {
                this.setState({
                    n4Metadata: {
                        factions: response.data.factions,
                        equipment: response.data.equips,
                        skills: response.data.skills,
                        weapons: response.data.weapons,
                        isLoaded: true
                    }
                });
            });
    }

    getParentFactions(factionArray) {
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
    }

    factionClickHandler = (factionId) => {
        this.setState({
            selectedFactionId: factionId,
            selectedSectorialId: 0
        });
    };

    sectorialClickHandler = (sectorialId) => {
        this.setState({
            selectedSectorialId: sectorialId,
            selectedFactionId: 0,
            selectedUnitId: 0
        });
    };

    sectorialLoadedCallback = (data) => {
        this.setState({
            currentSectorial: {
                ...this.state.currentSectorial,
                isLoaded: true,
                unitsN3: data.n3.sort((a, b) => {
                    if (a.ISC[0] > b.ISC[0]) return 1;
                    if (a.ISC[0] < b.ISC[0]) return -1;
                    return 0;
                }),
                unitsN4: data.n4.units,
                filtersN4: data.n4.filters
            }
        });
    };

    unitClickHandler = (unitId, logoUrl) => {
        this.setState({
            selectedUnitId: unitId,
            selectedUnitLogoUrl: logoUrl
        });
    };

    getAppSection = () => {
        if (this.state.selectedSectorialId === 0) {
            return (
                <SectorialList
                    sectorialId={this.state.selectedFactionId}
                    factions={this.state.n3Metadata.factions}
                    sectorialClickHandler={this.sectorialClickHandler}
                />
            );
        }

        let sectorialName = n3Factions.filter(
            (faction) => faction.id === this.state.selectedSectorialId
        )[0].name;

        return (
            <Sectorial
                id={this.state.selectedSectorialId}
                name={sectorialName}
                data={this.state.currentSectorial}
                n4Metadata={this.state.n4Metadata}
                selectedUnitId={this.state.selectedUnitId}
                selectedUnitLogoUrl={this.state.selectedUnitLogoUrl}
                unitClickHandler={this.unitClickHandler}
                loadCallback={this.sectorialLoadedCallback}
            />
        );
    };

    render() {
        if (!this.state.n4Metadata.isLoaded) {
            return <p>Loading...</p>;
        }

        let factions = this.getParentFactions(this.state.n3Metadata.factions);
        let appSection = this.getAppSection();

        return (
            <div className={styles.main}>
                <Header
                    onHome={this.state.selectedSectorialId === 0}
                    factionClickHandler={this.factionClickHandler}
                    factions={factions}
                />
                <div className={styles.section}>{appSection}</div>
                <div className={styles.info}>
                    <p className={styles.infoTitle}>Infinity N3/4 Army Comparer v0.1</p>
                    <p className={styles.infoMessage}>Feel free to give feedback to <b>Nix#1337</b> on the r/infinitythegame Discord server!</p>
                    <p className={styles.infoMessage}>
                        This is an unofficial application based on <i>Infinity</i>, ©
                        2020 Corvus Belli S.L.
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
