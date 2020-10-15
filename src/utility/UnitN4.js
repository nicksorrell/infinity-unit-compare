import n3Abilities from '../data/n3Abilities';
import n3Categories from '../data/n3Categories';
import n3Characteristics from '../data/n3Characteristics';
import n3Types from '../data/n3Types';
import n3Weapons from '../data/n3Weapons';
import n3Functions from './n3Functions';

class UnitN4 {
    constructor(unitData, parameters) {
        const convertN3ToN4 = parameters.convertFromN3 || false;
        const filters = parameters.filtersN4 || {};
        const unitN4 = {
            n3: convertN3ToN4,
            canonical: 0,
            compatible: [],
            filters: {
                ammunition: [],
                categories: [],
                chars: [],
                equip: [],
                skills: [],
                types: [],
                weapons: []
            },
            id: 0,
            idArmy: 0,
            isc: '',
            iscAbbr: '',
            name: '',
            notes: '',
            options: [],
            profileGroups: [],
            slug: ''
        };

        if (convertN3ToN4) {
            // General Info
            unitN4.id = +unitData.id;
            unitN4.idArmy = +unitData.idFaccion;
            unitN4.isc = unitData.ISC;
            unitN4.name = unitData.nombre;
            unitN4.notes = unitData.perfiles[0].notas
                ? unitData.perfiles[0].notas.replace(/(<([^>]+)>)/gi, ' ')
                : '';
            unitN4.profileGroups = [];

            // Create profile groups
            for (const profile of unitData.perfiles) {
                const filterCategory = n3Categories.find(
                    (cat) => cat.id === profile.categoria
                );
                if (profile.opciones.length > 0) {
                    const profileGroup = {};

                    profileGroup.category = filterCategory
                        ? filterCategory.nombre
                        : 'CATEGORY';
                    profileGroup.compatible = [];
                    profileGroup.id = profile.idUnidad;
                    profileGroup.isc = profile.ISC || profile.nombre || '';
                    profileGroup.notes = profile.notas || '';
                    profileGroup.profiles = [];
                    profileGroup.options = [];

                    unitN4.profileGroups.push(profileGroup);
                }
            }

            // Populate profile groups
            for (const [index, profile] of unitData.perfiles.entries()) {
                const unitProfile = {};
                /* This is for a fringe case(s) where a multi-group unit has
                 * a "dismounted" style second profile in the first group
                 * causing the index to be off with the current logic.
                 * IS THERE ANOTHER BETTER FIX?
                 */
                const targetGroupIndex =
                    index === unitN4.profileGroups.length ? index - 1 : index;
                const filterType = n3Types.find(
                    (type) => type.id === profile.tipo
                );

                unitProfile.arm = +profile.atributos.BLI;
                unitProfile.ava =
                    +profile.atributos.Disp === 255
                        ? 'Total'
                        : +profile.atributos.Disp;
                unitProfile.bs = +profile.atributos.CD;
                unitProfile.bts = +profile.atributos.PB;
                unitProfile.cc = +profile.atributos.CC;
                unitProfile.chars = [];
                unitProfile.equip = [];
                unitProfile.id = +profile.id;
                unitProfile.includes = []; // ???
                unitProfile.logo = profile.logo;
                unitProfile.move = [
                    +profile.atributos.MOV1,
                    +profile.atributos.MOV2
                ];
                unitProfile.name = profile.nombre;
                unitProfile.notes = '';
                unitProfile.peripheral = []; // ???
                unitProfile.ph = +profile.atributos.FIS;
                unitProfile.s = +profile.atributos.S;
                unitProfile.skills = [];
                unitProfile.str = false;
                unitProfile.type = filterType ? filterType.nombre : 'Type';
                unitProfile.w = +profile.atributos.H;
                unitProfile.weapons = []; // ???
                unitProfile.wip = +profile.atributos.VOL;

                const equipment = [];
                const skills = [];

                // Process characteristics
                let profileChars = n3Functions.processN3Array(
                    profile['caracteristicas']
                );

                for (let charId of profileChars) {
                    const profileChar = {};
                    const filterChar = n3Characteristics.find(
                        (ch) => ch.id === charId
                    );

                    profileChar.id = filterChar ? +filterChar.id : 0;
                    profileChar.name = filterChar ? filterChar.nombre : 'CHAR';

                    // Some characteristics also show up as skills
                    if (
                        ![1, 2, 3, 4, 5, 6, 7, 21, 23, 24].includes(
                            profileChar.id
                        )
                    ) {
                        profileChar.extra = [];
                        skills.push(profileChar);
                    }

                    unitProfile.chars.push(profileChar);
                }

                // Process skills and equipment
                let profileEquipSkills = n3Functions.processN3Array(
                    profile['equipo_habs']
                );

                for (let [index, itemId] of profileEquipSkills.entries()) {
                    const profileItem = {};
                    let isExtra = itemId[0] === 'e';
                    let id = isExtra ? itemId.substr(1, itemId.length) : itemId;

                    const filterItem = n3Abilities.find((ab) => ab.id === id);

                    profileItem.id = filterItem ? +filterItem.id : 0;
                    profileItem.name = filterItem ? filterItem.nombre : '';
                    profileItem.extra = [];

                    if (profileItem.name === '') continue;

                    if (filterItem && filterItem.equipo === '1') {
                        if (isExtra) {
                            equipment[index - 1].extra.push(profileItem);
                        } else {
                            equipment.push(profileItem);
                        }
                    } else {
                        if (isExtra) {
                            skills[index - 1].extra.push(profileItem);
                        } else {
                            skills.push(profileItem);
                        }
                    }
                }

                unitProfile.equip = equipment;
                unitProfile.skills = skills;

                // Add profile to a profile group
                if (profile.opciones.length > 0) {
                    unitN4.profileGroups[targetGroupIndex].profiles.push(
                        unitProfile
                    );
                } else {
                    unitN4.profileGroups[index - 1].profiles.push(unitProfile);
                }

                for (let option of profile.opciones) {
                    const groupOption = {};

                    groupOption.chars = [];
                    groupOption.compatible = [];
                    groupOption.disabled = false;
                    groupOption.equip = [];
                    groupOption.id = +option.id;
                    groupOption.includes = [];
                    groupOption.minis = +option.minis;
                    groupOption.name = option.nombre;
                    groupOption.orders = n3Functions.processN3Orders(
                        option.ordenes
                    );
                    groupOption.peripheral = [];
                    groupOption.points = +option.puntos;
                    groupOption.skills = [];
                    groupOption.swc = +option.CAP;
                    groupOption.weapons = [];

                    let optionWeapons = n3Functions.processN3Array(
                        option['armas']
                    );

                    for (let weapon of optionWeapons) {
                        const optionWeapon = {};
                        const filterWeapon = n3Weapons.find(
                            (wep) => wep.id === +weapon
                        );

                        optionWeapon.id = filterWeapon ? filterWeapon.id : 0;
                        optionWeapon.name = filterWeapon
                            ? filterWeapon.name
                            : '';
                        optionWeapon.extra = [];

                        optionWeapon.type = filterWeapon
                            ? filterWeapon.CC === '1' ||
                              filterWeapon.properties.includes('CC')
                                ? 'CC'
                                : 'BS'
                            : 'BS';

                        groupOption.weapons.push(optionWeapon);
                    }

                    unitN4.profileGroups[targetGroupIndex].options.push(
                        groupOption
                    );
                }
            }
        } else {
            // General Info
            unitN4.canonical = unitData.canonical;
            unitN4.compatible = unitData.compatible;
            unitN4.filters = unitData.filters;
            unitN4.id = unitData.id;
            unitN4.idArmy = unitData.idArmy;
            unitN4.isc = unitData.isc;
            unitN4.iscAbbr = unitData.iscAbbr || '';
            unitN4.name = unitData.name;
            unitN4.notes = unitData.notes;
            unitN4.options = unitData.options;
            unitN4.profileGroups = [];
            unitN4.slug = unitData.slug || '';

            // Create and populate Profile Groups
            for (let group of unitData.profileGroups) {
                let profileGroup = {};
                const filterCategory = filters.category.find(
                    (cat) => cat.id === group.category
                );

                profileGroup.category = filterCategory
                    ? filterCategory.name
                    : 'Category';
                profileGroup.compatible = group.compatible;
                profileGroup.id = group.id;
                profileGroup.isc = group.isc || '';
                profileGroup.notes = group.notes || '';

                profileGroup.options = [];
                for (let option of group.options) {
                    let groupOption = {};

                    groupOption.chars = option.chars;
                    groupOption.compatible = option.compatible;
                    groupOption.disabled = option.disabled;
                    groupOption.equip = [];
                    groupOption.id = option.id;
                    groupOption.includes = option.includes;
                    groupOption.minis = option.minis;
                    groupOption.name = option.name;
                    groupOption.orders = option.orders;
                    groupOption.peripheral = [];
                    groupOption.points = option.points;
                    groupOption.skills = [];
                    groupOption.swc = option.swc;
                    groupOption.weapons = [];

                    for (let equip of option.equip) {
                        const optionEquip = {};
                        const filterEquip = filters.equip.find(
                            (eq) => eq.id === equip.id
                        );

                        optionEquip.id = filterEquip ? filterEquip.id : 0;
                        optionEquip.name = filterEquip
                            ? filterEquip.name
                            : 'EQUIP';

                        groupOption.equip.push(optionEquip);
                    }

                    for (let peripheral of option.peripheral) {
                        const optionPeriphal = {};
                        const filterPeriph = filters.peripheral.find(
                            (p) => p.id === peripheral.id
                        );

                        optionPeriphal.id = filterPeriph ? filterPeriph.id : 0;
                        optionPeriphal.name = filterPeriph
                            ? filterPeriph.name
                            : 'PERIPH';

                        groupOption.peripheral.push(optionPeriphal);
                    }

                    for (let skill of option.skills) {
                        const optionSkill = {};
                        const filterSkill = filters.skills.find(
                            (sk) => sk.id === skill.id
                        );

                        optionSkill.id = filterSkill ? filterSkill.id : 0;
                        optionSkill.name = filterSkill
                            ? filterSkill.name
                            : 'SKILL';
                        optionSkill.extra = [];

                        if (skill.extra && skill.extra.length > 0) {
                            for (let extra of skill.extra) {
                                const skillExtra = {};
                                const filterExtra = filters.extras.find(
                                    (ex) => ex.id === extra
                                );

                                skillExtra.id = filterExtra
                                    ? filterExtra.id
                                    : 0;
                                skillExtra.name = filterExtra
                                    ? filterExtra.name
                                    : 'EXTRA';

                                optionSkill.extra.push(skillExtra);
                            }
                        }

                        groupOption.skills.push(optionSkill);
                    }

                    for (let weapon of option.weapons) {
                        const optionWeapon = {};
                        const filterWeapon = filters.weapons.find(
                            (wep) => wep.id === weapon.id
                        );

                        optionWeapon.id = filterWeapon ? filterWeapon.id : 0;
                        optionWeapon.name = filterWeapon
                            ? filterWeapon.name
                            : 'WEAPON';
                        optionWeapon.type = filterWeapon
                            ? filterWeapon.type
                            : 'BS';
                        optionWeapon.extra = [];

                        if (weapon.extra && weapon.extra.length > 0) {
                            for (let extra of weapon.extra) {
                                const weaponExtra = {};
                                const filterExtra = filters.extras.find(
                                    (ex) => ex.id === extra
                                );

                                weaponExtra.id = filterExtra
                                    ? filterExtra.id
                                    : 0;
                                weaponExtra.name = filterExtra
                                    ? filterExtra.name
                                    : 'EXTRA';

                                optionWeapon.extra.push(weaponExtra);
                            }
                        }

                        groupOption.weapons.push(optionWeapon);
                    }

                    profileGroup.options.push(groupOption);
                }

                profileGroup.profiles = [];
                for (let profile of group.profiles) {
                    let groupProfile = {};
                    const filterType = filters.type.find(
                        (type) => type.id === profile.type
                    );

                    groupProfile.arm = profile.arm;
                    groupProfile.ava =
                        profile.ava === 255 ? 'Total' : profile.ava;
                    groupProfile.bs = profile.bs;
                    groupProfile.bts = profile.bts;
                    groupProfile.cc = profile.cc;
                    groupProfile.chars = [];
                    groupProfile.equip = [];
                    groupProfile.id = profile.id;
                    groupProfile.includes = profile.includes;
                    groupProfile.logo = profile.logo;
                    groupProfile.move = profile.move;
                    groupProfile.name = profile.name;
                    groupProfile.notes = profile.notes || '';
                    groupProfile.peripheral = profile.peripheral;
                    groupProfile.ph = profile.ph;
                    groupProfile.s = profile.s;
                    groupProfile.skills = [];
                    groupProfile.str = profile.str;
                    groupProfile.type = filterType ? filterType.name : 'Type';
                    groupProfile.w = profile.w;
                    groupProfile.weapons = profile.weapons;
                    groupProfile.wip = profile.wip;

                    for (let char of profile.chars) {
                        const profileChar = {};
                        const filterChar = filters.chars.find(
                            (ch) => ch.id === char
                        );

                        profileChar.id = filterChar ? filterChar.id : 0;
                        profileChar.name = filterChar
                            ? filterChar.name
                            : 'Char';

                        groupProfile.chars.push(profileChar);
                    }

                    for (let item of profile.equip) {
                        const profileEquip = {};
                        const filterEquip = filters.equip.find(
                            (eq) => eq.id === item.id
                        );

                        profileEquip.id = filterEquip ? filterEquip.id : 0;
                        profileEquip.name = filterEquip
                            ? filterEquip.name
                            : 'Equip';

                        groupProfile.equip.push(profileEquip);
                    }

                    for (let item of profile.weapons) {
                        const profileEquip = {};
                        const filterWeapon = filters.weapons.find(
                            (wep) => wep.id === item.id
                        );

                        profileEquip.id = filterWeapon ? filterWeapon.id : 0;
                        profileEquip.name = filterWeapon
                            ? filterWeapon.name
                            : 'Weapon';

                        groupProfile.equip.push(profileEquip);
                    }

                    for (let skill of profile.skills) {
                        const profileSkill = {};
                        const filterSkill = filters.skills.find(
                            (sk) => sk.id === skill.id
                        );

                        profileSkill.id = skill.id;
                        profileSkill.name = filterSkill
                            ? filterSkill.name
                            : 'Skill';
                        profileSkill.extra = [];

                        if (skill.extra) {
                            for (let extra of skill.extra) {
                                const skillExtra = {};
                                const filterExtra = filters.extras.find(
                                    (ex) => ex.id === extra
                                );

                                skillExtra.id = extra;
                                skillExtra.name = filterExtra
                                    ? filterExtra.name
                                    : 'Extra';

                                profileSkill.extra.push(skillExtra);
                            }
                        }

                        groupProfile.skills.push(profileSkill);
                    }

                    profileGroup.profiles.push(groupProfile);
                }

                unitN4.profileGroups.push(profileGroup);
            }
        }

        return unitN4;
    }
}

export default UnitN4;
