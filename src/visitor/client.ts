import {DOMPrinter} from "../utils/domPrinter";
import {Wizard} from "./elements"
import {LevelUpVisitor} from "./visitors"

export function visitorDemo() {
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

    DOMPrinter.resetElement('visitor-logs');
    DOMPrinter.resetElement('visitor-json');

    const wizard = new Wizard(characterData);
    wizard.accept(new LevelUpVisitor());
    wizard.accept(new LevelUpVisitor());

    DOMPrinter.printJson('visitor-json', [wizard]);
}
