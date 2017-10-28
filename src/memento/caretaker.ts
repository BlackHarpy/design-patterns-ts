import {Memento} from './memento'

export class Caretaker {
    mementoList: Memento[];

    constructor() {
        this.mementoList = [];
    }

    addMemento(state: Memento){
        this.mementoList.push(state);
    }

    getMemento(index: number){
        return this.mementoList[index];
    }
}