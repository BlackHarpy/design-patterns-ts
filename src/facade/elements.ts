import { TABLES } from "../utils/constants"
import { CharacterVisitor } from "./visitors"

interface IAttributes {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
}

interface ICharacterStats {
    name: string;
    attributes: IAttributes;
}

export class Attributes implements IAttributes {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
    constructor(values: IAttributes) {
        this.STR = values.STR;
        this.DEX = values.DEX;
        this.CON = values.CON;
        this.INT = values.INT;
        this.WIS = values.WIS;
        this.CHA = values.CHA;
    }
    increment (name, points) {
        this[name] += points;
    }
    getModifier(name) {
        let modifier: number = -5;
        const score: number = this[name];
        if (score > 1) {
            modifier += Math.round(score / 2)
        }
        return modifier;
    }
}

export class ArcaneCharacter {
    name: string;
    level: number;
    attributes: Attributes;
    hitPoints: number;
    hitDie: number;
    cantrips: number;
    proficiencyBonus: number;
    constructor(data: ICharacterStats) {
        this.name = data.name;
        this.level = 1;
        this.attributes = new Attributes(data.attributes);
        this.hitPoints = 0;
        this.hitDie = 0;
        this.cantrips = 0;
        this.proficiencyBonus = 0;
    }
}

export class Wizard extends ArcaneCharacter {
    spellsSlots: number[];
    spellSlotsAvailable: number[];
    constructor(stats: ICharacterStats) {
        super(stats);
        this.spellsSlots = TABLES.WIZARD.Level1.spellsSlots;
        this.spellSlotsAvailable = this.spellsSlots.slice();
        this.hitDie = 6;
        this.hitPoints = 6 + this.attributes.getModifier('CON');
        this.proficiencyBonus = TABLES.WIZARD.Level1.proficiencyBonus;
    }
    accept(visitor: CharacterVisitor) {
        visitor.visitWizard(this);
    }
}

export interface IMonster {
    name: string;
    hitPoints: number;
    attributes: IAttributes;
    armorClass: number;
}

export class Monster implements IMonster{
    name: string;
    hitPoints: number;
    remainingHitPoints: number;
    attributes: Attributes;
    armorClass: number;

    constructor(data: IMonster) {
        this.name = data.name;
        this.hitPoints = data.hitPoints;
        this.remainingHitPoints = data.hitPoints;
        this.attributes = new Attributes(data.attributes);
        this.armorClass = data.armorClass;
    }
}

export interface ISpell {
    name: string;
    level: number;
    damage: string;
    save: string;
    damageType: string;
}

export class Spell {
    name: string;
    level: number;
    damage: string;
    save: string;
    damageType: string;

    constructor(data: ISpell) {
        this.name = data.name;
        this.level = data.level;
        this.damage = data.damage;
        this.save = data.save;
        this.damageType = data.damageType;
    }

    rollDamage() {
        const splitDamage = this.damage.split('d');
        const rolls = parseInt(splitDamage[0]);
        const die = parseInt(splitDamage[1]);
        let totalDamage = 0;
        for (let i = 1; i <= rolls; i++) {
            totalDamage += Math.floor(Math.random() * die);
        }
        return totalDamage;
    }
}