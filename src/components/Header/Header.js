import React from 'react';

import styles from './Header.module.css';

class Header extends React.Component {
    render() {
        let factions = this.props.factions.map((faction) => (
            <div
                className={[
                    styles.faction,
                    styles[`faction${faction.id}`]
                ].join(' ')}
                key={faction.id}
                onClick={() => this.props.factionClickHandler(faction.id)}
            />
        ));

        return (
            <div
                className={
                    this.props.onHome
                        ? styles.container
                        : [
                              styles.container,
                              styles['container__sectorial']
                          ].join(' ')
                }
            >
                <div className={styles['faction-list']}>
                    {this.props.onHome}
                    {factions}
                </div>
            </div>
        );
    }
}

export default Header;
