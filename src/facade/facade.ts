import {DOMPrinter} from "../utils/domPrinter";
import {Wizard, Spell, Monster} from "./elements"

export class Facade {

    private print(text: string) {
        DOMPrinter.printLog('facade-logs', text);
    }

    castSpell(wizard: Wizard, spell: Spell, monster: Monster) {

        //Use Wizard's Spell Slot
        wizard.spellSlotsAvailable[spell.level - 1]--;
        this.print(`${wizard.name} cast ${spell.name}!`);

        //Calculate Saving Throw of Wizard
        const savingThrow = 8 + wizard.attributes.getModifier('INT') + wizard.proficiencyBonus;

        //Roll Saving Throw of Monster
        const monsterSavingThrow =  Math.floor(Math.random() * 20) + monster.attributes.getModifier(spell.save);

        //Calculate Damage
        let spellDamage = spell.rollDamage();
        this.print(`${monster.name} rolled a ${monsterSavingThrow} against a ${spell.save} Saving Throw of ${savingThrow}!`);

        if (monsterSavingThrow >= savingThrow) {
            spellDamage = Math.round(spellDamage / 2);
            this.print(`It's not that effective...`);
        } else {
            this.print(`It's super effective!`)
        }
        this.print(`${monster.name} receives ${spellDamage} of damage!`);

        //Substract Monster's HP
        monster.remainingHitPoints -= spellDamage;
        this.print(`${monster.name} has ${monster.remainingHitPoints} HP left!`)
    }
}