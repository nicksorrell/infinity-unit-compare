const n3Weapons = [
    {
        id: 50,
        name: 'Adhesive Launcher',
        CC: '0',
        properties: ['Non-lethal']
    },
    {
        id: 1,
        name: 'Akrylat-Kanone',
        CC: '0',
        properties: ['Disposable (2)', 'Non-lethal']
    },
    {
        id: 61,
        name: 'Antipersonnel Mines',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Concealed',
            'Disposable (3)',
            'Direct Template (Small Teardrop)',
            'Deployable'
        ]
    },
    {
        id: 192,
        name: 'AP + DA CC Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 172,
        name: 'AP + Shock CCW',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 6,
        name: 'AP CC Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 100,
        name: 'AP Heavy Pistol',
        CC: '0',
        properties: ['CC']
    },
    {
        id: 3,
        name: 'AP HMG',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 85,
        name: 'AP Marksman Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 32,
        name: 'AP Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 35,
        name: 'AP Sniper',
        CC: '0',
        properties: ['']
    },
    {
        id: 157,
        name: 'AP Spitfire',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 70,
        name: 'Assault Pistol',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 141,
        name: 'Bare-handed',
        CC: '0',
        properties: ['CC']
    },
    {
        id: 14,
        name: 'Blitzen',
        CC: '0',
        properties: ['Disposable (2)']
    },
    {
        id: 133,
        name: 'Boarding Shotgun',
        CC: '0',
        properties: ['']
    },
    {
        id: 26,
        name: 'Boarding Shotgun',
        CC: '0',
        properties: ['Impact Template (Small Teardrop)']
    },
    {
        id: 103,
        name: 'Breaker Combi Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 98,
        name: 'Breaker Pistol',
        CC: '0',
        properties: ['CC']
    },
    {
        id: 109,
        name: 'Breaker Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 5,
        name: 'CC Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 18,
        name: 'Chain Rifle',
        CC: '0',
        properties: ['Intuitive Attack', 'Direct Template (Large Teardrop)']
    },
    {
        id: 80,
        name: 'Chain-colt',
        CC: '0',
        properties: ['Intuitive Attack', 'Direct Template (Small Teardrop)']
    },
    {
        id: 147,
        name: 'Chest Mines',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Disposable (2)',
            'Direct Template (Small Teardrop)'
        ]
    },
    {
        id: 148,
        name: 'Chest Mines',
        CC: '0',
        properties: ['Disposable (2)', 'CC (+3)']
    },
    {
        id: 33,
        name: 'Combi Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 19,
        name: 'Contender',
        CC: '0',
        properties: ['Anti-materiel']
    },
    {
        id: 20,
        name: 'CrazyKoala',
        CC: '1',
        properties: [
            'Disposable (2)',
            'Non-Lootable',
            'Deployable',
            'Perimeter'
        ]
    },
    {
        id: 174,
        name: 'Cybermine',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Concealed',
            'Disposable (3)',
            'Direct Template (Small Teardrop)',
            'Deployable',
            'Comms. Attack'
        ]
    },
    {
        id: 163,
        name: 'D-Charges',
        CC: '1',
        properties: ['Anti-materiel', 'Disposable (3)', 'CC (-3)']
    },
    {
        id: 17,
        name: 'D-Charges',
        CC: '1',
        properties: ['Anti-materiel', 'Disposable (3)', 'Deployable']
    },
    {
        id: 22,
        name: 'D.E.P.',
        CC: '0',
        properties: ['Anti-materiel', 'Disposable (1)']
    },
    {
        id: 11,
        name: 'DA CC Weapon',
        CC: '1',
        properties: ['Anti-materiel', 'CC']
    },
    {
        id: 183,
        name: 'Dazer',
        CC: '0',
        properties: ['']
    },
    {
        id: 130,
        name: 'Deactivator',
        CC: '0',
        properties: ['Technical Weapon', 'BS Attack', 'Non-Lootable']
    },
    {
        id: 131,
        name: 'Discover',
        CC: '0',
        properties: ['']
    },
    {
        id: 132,
        name: 'Drop Bears (Deployable Weapon)',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Disposable (3)',
            'Direct Template (Small Teardrop)',
            'Deployable'
        ]
    },
    {
        id: 96,
        name: 'Drop Bears (Throwing Weapon)',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Disposable (3)',
            'Targetless'
        ]
    },
    {
        id: 7,
        name: 'E|M CC Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 47,
        name: 'E|M Grenade',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Impact Template (Circular)'
        ]
    },
    {
        id: 52,
        name: 'E|M Light Grenade Launcher',
        CC: '0',
        properties: ['Speculative Fire', 'Impact Template (Circular)']
    },
    {
        id: 173,
        name: 'E|M2 CC Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 23,
        name: 'E|Marat',
        CC: '0',
        properties: ['Intuitive Attack', 'Direct Template (Large Teardrop)']
    },
    {
        id: 24,
        name: 'E|Mauler',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Concealed',
            'Disposable (3)',
            'Direct Template (Small Teardrop)',
            'Deployable'
        ]
    },
    {
        id: 25,
        name: 'E|Mitter',
        CC: '0',
        properties: ['']
    },
    {
        id: 46,
        name: 'Eclipse Grenades',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Dodge',
            'Non-lethal',
            'Impact Template (Circular)',
            'Targetless',
            'Reflective'
        ]
    },
    {
        id: 76,
        name: 'Eclipse Light Grenade Launcher',
        CC: '0',
        properties: [
            'Speculative Fire',
            'Dodge',
            'Non-lethal',
            'Impact Template (Circular)',
            'Targetless',
            'Reflective'
        ]
    },
    {
        id: 71,
        name: 'Electric Pulse',
        CC: '1',
        properties: [
            '2 Turns',
            'CC',
            'IMM-2',
            'Non-Lootable',
            'Non-lethal',
            'Automatic (7)'
        ]
    },
    {
        id: 8,
        name: 'EXP CC Weapon',
        CC: '1',
        properties: ['Anti-materiel', 'CC']
    },
    {
        id: 108,
        name: 'FastPanda',
        CC: '0',
        properties: ['']
    },
    {
        id: 30,
        name: 'Feuerbach',
        CC: '0',
        properties: ['Anti-materiel']
    },
    {
        id: 159,
        name: 'Feuerbach',
        CC: '0',
        properties: ['Anti-materiel']
    },
    {
        id: 82,
        name: 'Flammenspeer',
        CC: '0',
        properties: ['Disposable (2)', 'Impact Template (Circular)']
    },
    {
        id: 120,
        name: 'Flammenspeer',
        CC: '0',
        properties: ['Disposable (2)']
    },
    {
        id: 48,
        name: 'Flash Grenade',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Impact Template (Circular)'
        ]
    },
    {
        id: 53,
        name: 'Flash Light Grenade Launcher',
        CC: '0',
        properties: ['Speculative Fire', 'Impact Template (Circular)']
    },
    {
        id: 72,
        name: 'Flash Pulse',
        CC: '0',
        properties: ['Technical Weapon', 'Non-Lootable', 'Non-lethal']
    },
    {
        id: 66,
        name: 'Forward Observer',
        CC: '1',
        properties: ['Technical Weapon', 'Non-lethal', 'Non-Lootable']
    },
    {
        id: 44,
        name: 'Grenade',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Impact Template (Circular)'
        ]
    },
    {
        id: 57,
        name: 'Heavy Flamethrower',
        CC: '0',
        properties: ['Intuitive Attack', 'Direct Template (Large Teardrop)']
    },
    {
        id: 55,
        name: 'Heavy Grenade Launcher',
        CC: '0',
        properties: [
            'Speculative Fire',
            'Impact Template (Circular)',
            'Non-Lootable'
        ]
    },
    {
        id: 107,
        name: 'Heavy Pistol',
        CC: '0',
        properties: ['CC']
    },
    {
        id: 188,
        name: 'Heavy Riotstopper',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Direct Template (Large Teardrop)',
            'Non-lethal'
        ]
    },
    {
        id: 89,
        name: 'Heavy Rocket Launcher',
        CC: '0',
        properties: ['Impact Template (Circular)']
    },
    {
        id: 124,
        name: 'Heavy Rocket Launcher',
        CC: '0',
        properties: ['']
    },
    {
        id: 134,
        name: 'Heavy Shotgun',
        CC: '0',
        properties: ['']
    },
    {
        id: 29,
        name: 'Heavy Shotgun',
        CC: '0',
        properties: ['Impact Template (Small Teardrop)']
    },
    {
        id: 79,
        name: 'Hedgehog Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 2,
        name: 'HMG',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 128,
        name: 'Hyper-Rapid Magnetic Cannon',
        CC: '0',
        properties: ['Anti-materiel', 'Light MULTI', 'Non-Lootable']
    },
    {
        id: 15,
        name: 'Hyper-Rapid Magnetic Cannon',
        CC: '0',
        properties: ['Suppressive Fire', 'Light MULTI', 'Non-Lootable']
    },
    {
        id: 168,
        name: 'Hyper-Rapid Magnetic Cannon',
        CC: '0',
        properties: ['Anti-materiel', 'Light MULTI', 'Non-Lootable']
    },
    {
        id: 87,
        name: 'Jammer',
        CC: '0',
        properties: [
            'Technical Weapon',
            'Intuitive Attack',
            'State: Isolated',
            'No LoF',
            'Zone of Control',
            'Comms. Attack'
        ]
    },
    {
        id: 95,
        name: 'K1 Combi Rifle',
        CC: '0',
        properties: ['Anti-materiel', 'Suppressive Fire']
    },
    {
        id: 181,
        name: 'K1 Marksman Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 110,
        name: 'K1 Sniper',
        CC: '0',
        properties: ['Anti-materiel']
    },
    {
        id: 49,
        name: 'Katyusha MRL',
        CC: '0',
        properties: [
            'Anti-materiel',
            'Speculative Fire',
            'Non-Lootable',
            'Impact Template (Circular)'
        ]
    },
    {
        id: 122,
        name: 'Katyusha MRL',
        CC: '0',
        properties: [
            'Anti-materiel',
            'Guided',
            'Non-Lootable',
            'Impact Template (Circular)'
        ]
    },
    {
        id: 21,
        name: 'Knife',
        CC: '1',
        properties: ['CC', 'Silent']
    },
    {
        id: 56,
        name: 'Light Flamethrower',
        CC: '0',
        properties: ['Intuitive Attack', 'Direct Template (Small Teardrop)']
    },
    {
        id: 51,
        name: 'Light Grenade Launcher',
        CC: '0',
        properties: ['Speculative Fire', 'Impact Template (Circular)']
    },
    {
        id: 187,
        name: 'Light Riotstopper',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Direct Template (Small Teardrop)',
            'Non-lethal'
        ]
    },
    {
        id: 88,
        name: 'Light Rocket Launcher',
        CC: '0',
        properties: ['Impact Template (Circular)']
    },
    {
        id: 123,
        name: 'Light Rocket Launcher',
        CC: '0',
        properties: ['']
    },
    {
        id: 28,
        name: 'Light Shotgun',
        CC: '0',
        properties: ['Impact Template (Small Teardrop)']
    },
    {
        id: 150,
        name: 'MadTrap',
        CC: '0',
        properties: [
            'Disposable (2)',
            'Non-lethal',
            'Non-Lootable',
            'Deployable',
            'Perimeter'
        ]
    },
    {
        id: 60,
        name: 'Marker',
        CC: '0',
        properties: [
            'Speculative Fire',
            'Disposable (2)',
            'Indiscriminate',
            'Non-lethal',
            'Targetless'
        ]
    },
    {
        id: 84,
        name: 'Marksman Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 142,
        name: 'MediKit',
        CC: '0',
        properties: ['Non-lethal']
    },
    {
        id: 176,
        name: 'Mine Dispenser',
        CC: '0',
        properties: ['Speculative Fire', 'Disposable (2)', 'Targetless']
    },
    {
        id: 140,
        name: 'Missile Launcher',
        CC: '0',
        properties: ['Anti-materiel']
    },
    {
        id: 58,
        name: 'Missile Launcher',
        CC: '0',
        properties: ['Anti-materiel', 'Impact Template (Circular)']
    },
    {
        id: 64,
        name: 'Mk12',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 91,
        name: 'Molotok',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 9,
        name: 'Monofilament CC Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 62,
        name: 'Monofilament Mines',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Concealed',
            'Disposable (3)',
            'Direct Template (Small Teardrop)',
            'Deployable'
        ]
    },
    {
        id: 117,
        name: 'MULTI HMG',
        CC: '0',
        properties: ['Anti-materiel', 'Heavy MULTI', 'Non-Lootable']
    },
    {
        id: 4,
        name: 'MULTI HMG',
        CC: '0',
        properties: ['Suppressive Fire', 'Heavy MULTI', 'Non-Lootable']
    },
    {
        id: 161,
        name: 'MULTI HMG',
        CC: '0',
        properties: ['Heavy MULTI', 'Non-lethal', 'Non-Lootable']
    },
    {
        id: 170,
        name: 'MULTI Marksman Rifle',
        CC: '0',
        properties: ['Anti-materiel', 'Light MULTI']
    },
    {
        id: 169,
        name: 'MULTI Marksman Rifle',
        CC: '0',
        properties: ['Suppressive Fire', 'Light MULTI']
    },
    {
        id: 171,
        name: 'MULTI Marksman Rifle',
        CC: '0',
        properties: ['Light MULTI', 'Non-lethal']
    },
    {
        id: 190,
        name: 'MULTI Pistol',
        CC: '1',
        properties: ['Anti-materiel', 'CC', 'Light MULTI']
    },
    {
        id: 189,
        name: 'MULTI Pistol',
        CC: '1',
        properties: ['CC', 'Light MULTI']
    },
    {
        id: 191,
        name: 'MULTI Pistol',
        CC: '1',
        properties: ['CC', 'Light MULTI', 'Non-lethal']
    },
    {
        id: 138,
        name: 'MULTI Rifle',
        CC: '0',
        properties: ['Anti-materiel', 'Light MULTI']
    },
    {
        id: 41,
        name: 'MULTI Rifle',
        CC: '0',
        properties: ['Suppressive Fire', 'Light MULTI']
    },
    {
        id: 164,
        name: 'MULTI Rifle',
        CC: '0',
        properties: ['Light MULTI', 'Non-lethal']
    },
    {
        id: 136,
        name: 'MULTI Sniper',
        CC: '0',
        properties: ['Anti-materiel', 'Medium MULTI']
    },
    {
        id: 36,
        name: 'MULTI Sniper',
        CC: '0',
        properties: ['Medium MULTI']
    },
    {
        id: 165,
        name: 'MULTI Sniper',
        CC: '0',
        properties: ['Medium MULTI', 'Non-lethal']
    },
    {
        id: 65,
        name: 'Nanopulser',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Non-Lootable',
            'Direct Template (Small Teardrop)'
        ]
    },
    {
        id: 99,
        name: 'Nimbus Grenades',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Non-lethal',
            'Impact Template (Circular)',
            'Reflective',
            'Targetless'
        ]
    },
    {
        id: 105,
        name: 'Nimbus Light Grenade Launcher',
        CC: '0',
        properties: [
            'Speculative Fire',
            'Non-lethal',
            'Impact Template (Circular)',
            'Reflective',
            'Targetless'
        ]
    },
    {
        id: 139,
        name: 'Nimbus Plus Grenades',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Non-lethal',
            'Impact Template (Circular)',
            'Reflective',
            'Targetless'
        ]
    },
    {
        id: 93,
        name: 'Nullifier',
        CC: '0',
        properties: ['']
    },
    {
        id: 67,
        name: 'Ojotnik',
        CC: '0',
        properties: ['']
    },
    {
        id: 68,
        name: 'Panzerfaust',
        CC: '0',
        properties: ['Anti-materiel', 'Disposable (2)']
    },
    {
        id: 184,
        name: 'Phero-Booster',
        CC: '0',
        properties: ['Technical Weapon', 'Non-Lootable']
    },
    {
        id: 185,
        name: 'Phero-Booster',
        CC: '0',
        properties: ['Technical Weapon', 'Non-Lootable']
    },
    {
        id: 186,
        name: 'Phero-Booster',
        CC: '0',
        properties: ['Technical Weapon', 'Non-Lootable', 'Non-lethal']
    },
    {
        id: 69,
        name: 'Pistol',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 154,
        name: 'Pitcher',
        CC: '0',
        properties: [
            'Disposable (2)',
            'Indiscriminate',
            'Non-lethal',
            'Speculative Fire',
            'Targetless'
        ]
    },
    {
        id: 111,
        name: 'Plasma Carbine',
        CC: '0',
        properties: ['Impact Template (Small Teardrop)']
    },
    {
        id: 129,
        name: 'Plasma Carbine',
        CC: '0',
        properties: ['']
    },
    {
        id: 40,
        name: 'Plasma Rifle',
        CC: '0',
        properties: ['Suppressive Fire', 'Impact Template (Small Teardrop)']
    },
    {
        id: 137,
        name: 'Plasma Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 113,
        name: 'Plasma Sniper',
        CC: '0',
        properties: ['Impact Template (Small Teardrop)']
    },
    {
        id: 135,
        name: 'Plasma Sniper',
        CC: '0',
        properties: ['']
    },
    {
        id: 16,
        name: 'Portable Autocannon',
        CC: '0',
        properties: ['Anti-materiel']
    },
    {
        id: 145,
        name: 'Pulzar',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Non-Lootable',
            'Direct Template (Large Teardrop)'
        ]
    },
    {
        id: 152,
        name: 'Red Fury',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 31,
        name: 'Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 73,
        name: 'Sepsitor',
        CC: '1',
        properties: [
            'Intuitive Attack',
            'Disposable (2)',
            'Non-Lootable',
            'Direct Template (Large Teardrop)'
        ]
    },
    {
        id: 114,
        name: 'Sepsitor Plus',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Non-Lootable',
            'Direct Template (Large Teardrop)'
        ]
    },
    {
        id: 151,
        name: 'SF Mode',
        CC: '0',
        properties: ['']
    },
    {
        id: 10,
        name: 'Shock CC Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 155,
        name: 'Shock Marksman Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 144,
        name: 'SimbioBombs',
        CC: '0',
        properties: ['']
    },
    {
        id: 115,
        name: 'Smart Heavy Rocket Launcher',
        CC: '0',
        properties: ['Impact Template (Circular)']
    },
    {
        id: 90,
        name: 'Smart Heavy Rocket Launcher',
        CC: '0',
        properties: ['Guided', 'Impact Template (Circular)']
    },
    {
        id: 102,
        name: 'Smart Missile Launcher',
        CC: '0',
        properties: ['Anti-materiel', 'Impact Template (Circular)']
    },
    {
        id: 59,
        name: 'Smart Missile Launcher',
        CC: '0',
        properties: ['Anti-materiel', 'Guided', 'Impact Template (Circular)']
    },
    {
        id: 121,
        name: 'Smart MULTI Sniper',
        CC: '0',
        properties: ['Anti-materiel', 'Medium MULTI']
    },
    {
        id: 116,
        name: 'Smart MULTI Sniper',
        CC: '0',
        properties: ['Medium MULTI']
    },
    {
        id: 37,
        name: 'Smart MULTI Sniper',
        CC: '0',
        properties: ['Anti-materiel', 'Guided', 'Impact Template (Circular)']
    },
    {
        id: 166,
        name: 'Smart MULTI Sniper',
        CC: '0',
        properties: ['Medium MULTI', 'Non-lethal']
    },
    {
        id: 45,
        name: 'Smoke Grenades',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Dodge',
            'Non-lethal',
            'Impact Template (Circular)',
            'Targetless'
        ]
    },
    {
        id: 54,
        name: 'Smoke Light Grenade Launcher',
        CC: '0',
        properties: [
            'Speculative Fire',
            'Dodge',
            'Non-lethal',
            'Impact Template (Circular)',
            'Targetless'
        ]
    },
    {
        id: 101,
        name: 'Sniffer',
        CC: '0',
        properties: [
            'Disposable (3)',
            'Indiscriminate',
            'Deployable',
            'Zone of Control'
        ]
    },
    {
        id: 34,
        name: 'Sniper',
        CC: '0',
        properties: ['']
    },
    {
        id: 74,
        name: 'Spitfire',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 146,
        name: 'Stun Grenade',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Impact Template (Circular)',
            'Non-lethal'
        ]
    },
    {
        id: 167,
        name: 'Stun Light Grenade Launcher',
        CC: '0',
        properties: [
            'Speculative Fire',
            'Impact Template (Circular)',
            'Non-lethal'
        ]
    },
    {
        id: 92,
        name: 'Stun Pistol',
        CC: '1',
        properties: ['CC', 'Non-lethal']
    },
    {
        id: 77,
        name: 'Submachine Gun',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 160,
        name: 'Submachine Gun',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 127,
        name: 'Supp. Fire Mode Weapon',
        CC: '0',
        properties: ['']
    },
    {
        id: 86,
        name: 'Swarm Grenades',
        CC: '0',
        properties: [
            'Throwing Weapon',
            'Speculative Fire',
            'Impact Template (Circular)'
        ]
    },
    {
        id: 158,
        name: 'SymbioBugs',
        CC: '0',
        properties: [
            'Disposable (2)',
            'Non-Lootable',
            'Deployable',
            'Perimeter'
        ]
    },
    {
        id: 143,
        name: 'SymbioMate',
        CC: '0',
        properties: ['']
    },
    {
        id: 27,
        name: 'T2 Boarding Shotgun',
        CC: '0',
        properties: ['Impact Template (Small Teardrop)']
    },
    {
        id: 118,
        name: 'T2 Boarding Shotgun',
        CC: '0',
        properties: ['Anti-materiel']
    },
    {
        id: 153,
        name: 'T2 CC Weapon',
        CC: '1',
        properties: ['CC', 'Anti-materiel']
    },
    {
        id: 180,
        name: 'T2 Marksman Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 42,
        name: 'T2 Rifle',
        CC: '0',
        properties: ['Anti-materiel', 'Suppressive Fire']
    },
    {
        id: 38,
        name: 'T2 Sniper',
        CC: '0',
        properties: ['Anti-materiel']
    },
    {
        id: 106,
        name: 'Tactical Bow',
        CC: '0',
        properties: ['Anti-materiel', 'Silent']
    },
    {
        id: 12,
        name: 'Templar CC Weapon',
        CC: '1',
        properties: ['']
    },
    {
        id: 94,
        name: 'Templar CCW',
        CC: '1',
        properties: ['']
    },
    {
        id: 78,
        name: 'Templar CCW',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 162,
        name: 'Templar CCW',
        CC: '1',
        properties: ['Anti-materiel', 'CC']
    },
    {
        id: 97,
        name: 'TinBot A (Deflector L1)',
        CC: '0',
        properties: ['']
    },
    {
        id: 104,
        name: 'TinBot B (Deflector L2)',
        CC: '0',
        properties: ['']
    },
    {
        id: 177,
        name: 'Trench-hammer',
        CC: '0',
        properties: ['CC', 'Disposable (3)']
    },
    {
        id: 178,
        name: 'Trench-hammer',
        CC: '0',
        properties: ['Throwing Weapon', 'Disposable (3)']
    },
    {
        id: 75,
        name: 'Uragan MRL',
        CC: '0',
        properties: [
            'Speculative Fire',
            'Non-Lootable',
            'Impact Template (Circular)',
            'Burst: Single Target'
        ]
    },
    {
        id: 125,
        name: 'Uragan MRL',
        CC: '0',
        properties: ['Guided', 'Non-Lootable', 'Impact Template (Circular)']
    },
    {
        id: 126,
        name: 'Uragan MRL',
        CC: '0',
        properties: ['Non-Lootable', 'Burst: Single Target']
    },
    {
        id: 13,
        name: 'Viral CC Weapon',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 83,
        name: 'Viral Combi Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 63,
        name: 'Viral Mines',
        CC: '0',
        properties: [
            'Intuitive Attack',
            'Concealed',
            'Disposable (3)',
            'Direct Template (Small Teardrop)',
            'Deployable'
        ]
    },
    {
        id: 156,
        name: 'Viral Pistol',
        CC: '1',
        properties: ['CC']
    },
    {
        id: 43,
        name: 'Viral Rifle',
        CC: '0',
        properties: ['Suppressive Fire']
    },
    {
        id: 39,
        name: 'Viral Sniper',
        CC: '0',
        properties: ['']
    },
    {
        id: 179,
        name: 'Viral Tactical Bow',
        CC: '0',
        properties: ['Silent']
    },
    {
        id: 149,
        name: 'Vorpal CC Weapon',
        CC: '1',
        properties: ['Throwing Weapon', 'CC']
    },
    {
        id: 119,
        name: 'Vulkan Shotgun',
        CC: '0',
        properties: ['']
    },
    {
        id: 81,
        name: 'Vulkan Shotgun',
        CC: '0',
        properties: ['Impact Template (Small Teardrop)']
    },
    {
        id: 182,
        name: 'WildParrot',
        CC: '1',
        properties: [
            'Intuitive Attack',
            'Disposable (1)',
            'Direct Template (Small Teardrop)',
            'Deployable'
        ]
    },
    {
        id: 175,
        name: 'Zapper',
        CC: '0',
        properties: ['Intuitive Attack', 'Direct Template (Small Teardrop)']
    }
];

export default n3Weapons;
