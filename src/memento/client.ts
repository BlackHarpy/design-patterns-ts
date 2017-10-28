import {DOMPrinter} from "../utils/domPrinter"
import {Originator} from "./originator";
import {Caretaker} from "./caretaker";

export function mementoDemo() {
    let originator = new Originator();
    let caretaker = new Caretaker();

    DOMPrinter.resetElement('memento-logs');
    DOMPrinter.resetElement('memento-json');

    originator.setState({
        id: 1,
        points: 360,
        equippedWeapon: 'Pistol',
        powerUps: 1,
        coins: 58,
        distance: 150
    });
    originator.setState({
        id: 2,
        points: 430,
        equippedWeapon: 'Pistol',
        powerUps: 2,
        coins: 79,
        distance: 230
    });
    caretaker.addMemento(originator.saveStateToMemento());

    originator.setState({
        id: 3,
        points: 570,
        equippedWeapon: 'Machine Gun',
        powerUps: 0,
        coins: 83,
        distance: 320
    });
    caretaker.addMemento(originator.saveStateToMemento());

    originator.setState({
        id: 4,
        points: 610,
        equippedWeapon: '-',
        powerUps: 0,
        coins: 58,
        distance: 380
    });



    originator.getStateFromMemento(caretaker.getMemento(0));

    DOMPrinter.printJson('memento-json', [originator.getState()]);

    originator.getStateFromMemento(caretaker.getMemento(1));

    DOMPrinter.printJson('memento-json', [originator.getState()]);
}