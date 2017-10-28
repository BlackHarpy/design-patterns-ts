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
        this.hitDie = 6;
        this.hitPoints = 6 + this.attributes.getModifier('CON');
        this.proficiencyBonus = TABLES.WIZARD.Level1.proficiencyBonus;
    }
    accept(visitor: CharacterVisitor) {
        visitor.visitWizard(this);
    }
}

export class Warlock extends ArcaneCharacter {
    spellsSlots: number;
    slotLevel: number;
    invocations: number;
    constructor(stats: ICharacterStats) {
        super(stats);
        this.spellsSlots = TABLES.WARLOCK.Level1.spellsSlots;
        this.slotLevel = TABLES.WARLOCK.Level1.slotLevel;
        this.cantrips = TABLES.WARLOCK.Level1.cantrips;
        this.hitDie = 8;
        this.hitPoints = 8 + this.attributes.getModifier('CON');
        this.proficiencyBonus = TABLES.WARLOCK.Level1.proficiencyBonus;
    }
    accept(visitor: CharacterVisitor) {
        visitor.visitWarlock(this);
    }
}
