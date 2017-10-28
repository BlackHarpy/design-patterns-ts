import {DOMPrinter} from "../utils/domPrinter"
import { Director } from "./director";
import { StandardLightsaberBuilder } from "./builders"

export function builderDemo() {
    DOMPrinter.resetElement('builder-logs');
    DOMPrinter.resetElement('builder-json');

    const builder = new StandardLightsaberBuilder();
    const director = new Director(builder);

    const lightsaber = director.construct();

    DOMPrinter.printJson('builder-json', [lightsaber]);
}