import {DOMPrinter} from "../utils/domPrinter";
import {Memento} from "./memento"

export class Checkpoint {
    id: number;
    points: number;
    equippedWeapon: string;
    powerUps: number;
    coins: number;
    distance: number;
}

export class Originator {
    private state: Checkpoint;

    private print(text: string) {
        DOMPrinter.printLog('memento-logs', text);
    }

    constructor() {
        this.state = {
            id: 0,
            points: 0,
            equippedWeapon: '-',
            powerUps: 0,
            coins: 0,
            distance: 0
        };

    }

    setState(state: Checkpoint) {
        this.state = state;
        this.print(`Current State: ${this.state.id}`);
    }

    getState() {
        return this.state;
    }

    saveStateToMemento () {
        this.print(`Memento saved!`);

        return new Memento(this.state);
    }

    getStateFromMemento (memento: Memento) {
        this.state = memento.getState();
    }

}