import {Checkpoint} from "./originator"

export class Memento {
    private state: Checkpoint;

    constructor(state: Checkpoint) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

}