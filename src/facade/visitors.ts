import {Wizard} from "./elements"
import { TABLES } from "../utils/constants"

export interface CharacterVisitor {
    visitWizard (character: Wizard) : void;
}

export class LevelUpVisitor implements CharacterVisitor {
    visitWizard(wizard: Wizard) {
        wizard.level++;
        wizard.hitPoints += Math.floor(Math.random() * wizard.hitDie) + wizard.attributes.getModifier('CON');
        wizard.cantrips = TABLES.WIZARD[`Level${wizard.level}`].cantrips;
        wizard.spellsSlots = TABLES.WIZARD[`Level${wizard.level}`].spellsSlots;
        wizard.proficiencyBonus = TABLES.WIZARD[`Level${wizard.level}`].proficiencyBonus;
    }
}
