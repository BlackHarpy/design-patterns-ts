import {DOMPrinter} from "../utils/domPrinter";
import {Wizard, Warlock} from "./elements"
import {TABLES} from "../utils/constants"

export interface CharacterVisitor {
    visitWizard (character: Wizard) : void;
    visitWarlock (character: Warlock) : void;
}

export class LevelUpVisitor implements CharacterVisitor {

    private print(text: string) {
        DOMPrinter.printLog('visitor-logs', text);
    }

    visitWizard(wizard: Wizard) {
        wizard.level++;
        wizard.hitPoints += Math.floor(Math.random() * wizard.hitDie) + wizard.attributes.getModifier('CON');
        wizard.cantrips = TABLES.WIZARD[`Level${wizard.level}`].cantrips;
        wizard.spellsSlots = TABLES.WIZARD[`Level${wizard.level}`].spellsSlots;
        wizard.proficiencyBonus = TABLES.WIZARD[`Level${wizard.level}`].proficiencyBonus;
        let logText = `${wizard.name} is now a Level ${wizard.level} Wizard!<br>
                       HP increased to ${wizard.hitPoints}<br>
                       ${wizard.name} has ${wizard.cantrips} Cantrips and the available Spells Slots:<br>`;

        for (let i = 0; i < wizard.spellsSlots.length; i++) {
            if (wizard.spellsSlots[i]) {
                logText += `Level ${i + 1}: ${wizard.spellsSlots[i]}<br>`;
            }
        }

        logText += `Proficiency Bonus is now +${wizard.proficiencyBonus}`;
        this.print(logText);
    }

    visitWarlock (warlock: Warlock) {
        warlock.level++;
        warlock.hitPoints += Math.floor(Math.random() * warlock.hitDie) + warlock.attributes.getModifier('CON');
        warlock.cantrips = TABLES.WARLOCK[`Level${warlock.level}`].cantrips;
        warlock.spellsSlots = TABLES.WARLOCK[`Level${warlock.level}`].spellsSlots;
        warlock.slotLevel = TABLES.WARLOCK[`Level${warlock.level}`].slotLevel;
        warlock.invocations = TABLES.WARLOCK[`Level${warlock.level}`].invocations;
        warlock.proficiencyBonus = TABLES.WARLOCK[`Level${warlock.level}`].proficiencyBonus;

        const logText = `${warlock.name} is now a Level ${warlock.level} Warlock! <br>
            HP increased to ${warlock.hitPoints}<br>
            Cantrips amount are now in ${warlock.cantrips}<br>
            Spells Slots are now in ${warlock.spellsSlots} of level ${warlock.slotLevel}<br>
            Number of invocations are now ${warlock.invocations}<br>
            Proficiency Bonus is now +${warlock.proficiencyBonus}<br>`;
        this.print(logText);
    }
}
