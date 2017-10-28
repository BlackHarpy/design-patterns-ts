import {DOMPrinter} from "../utils/domPrinter"
import {Wizard, Monster, Spell} from "./elements"
import {LevelUpVisitor} from "./visitors"
import {Facade} from "./facade"

export function facadeDemo() {
    const characterData = {
        name: 'Annia',
        attributes: {
            STR: 9,
            CON: 12,
            DEX: 13,
            INT: 17,
            WIS: 14,
            CHA: 10
        }
    };

    const trollData = {
        name: 'Troll',
        hitPoints: 84,
        attributes: {
            STR: 18,
            DEX: 13,
            CON: 20,
            INT: 7,
            WIS: 9,
            CHA: 7
        },
        armorClass: 15
    };

    const spellData = {
        name: 'Fireball',
        level: 3,
        damage: '8d6',
        save: 'DEX',
        damageType: 'Fire'
    };

    DOMPrinter.resetElement('facade-logs');
    DOMPrinter.resetElement('facade-json');

    const wizard = new Wizard(characterData);
    wizard.accept(new LevelUpVisitor());
    wizard.accept(new LevelUpVisitor());
    wizard.accept(new LevelUpVisitor());
    wizard.accept(new LevelUpVisitor());

    const troll = new Monster(trollData);

    const spell = new Spell(spellData);

    const facade = new Facade();

    facade.castSpell(wizard, spell, troll);

    DOMPrinter.printJson('facade-json', [wizard,spell,troll]);
}
