import {DOMPrinter} from "../utils/domPrinter";
import {Blade, Hilt, Lightsaber} from "./parts";

export interface ILightsaberBuilder {
    setLightsaberName(name: string): void;
    setHiltName(hiltName: string): void;
    setHiltMaterial(hiltMaterial: string): void;
    setHiltCrystal(hiltCrystal: string): void;
    setHiltActivator(hiltActivator: string): void;
    setBladeName(bladeName: string): void;
    setBladeColor(bladeColor:string): void;
    buildLightSaber(): void;
    getLightsaber(): Lightsaber;
}

export class StandardLightsaberBuilder implements ILightsaberBuilder {

    private lightsaber: Lightsaber;

    private lightsaberName: string;

    private hiltName: string;
    private hiltMaterial: string;
    private hiltCrystal: string;
    private hiltActivator: string;

    private bladeName: string;
    private bladeColor: string;

    constructor() {
        this.hiltName = '';
        this.hiltMaterial = '';
        this.hiltCrystal = '';
        this.hiltActivator = '';
        this.bladeName = '';
        this.bladeColor = '';
    }

    private print(text: string) {
        DOMPrinter.printLog('builder-logs', text);

    }

    setLightsaberName(name: string) {
        this.lightsaberName = name;
        this.print('Lightsaber Name is set!');
    }

    setHiltName(hiltName: string) {
        this.hiltName = hiltName;
        this.print('Hilt Name is set!');
    }

    setHiltMaterial(hiltMaterial: string) {
        this.hiltMaterial = hiltMaterial;
        this.print('Hilt Material is set!');
    }

    setHiltCrystal(hiltCrystal: string) {
        this.hiltCrystal = hiltCrystal;
        this.print('Hilt Crystal is set!');

    }

    setHiltActivator(hiltActivator: string) {
        this.hiltActivator = hiltActivator;
        this.print('Hilt Activator is set!');
    }

    setBladeName(bladeName: string) {
        this.bladeName = bladeName;
        this.print('Blade Name is set!');
    }

    setBladeColor(bladeColor: string) {
        this.bladeColor = bladeColor;
        this.print('Blade Color is set!');
    }

    buildLightSaber() {
        const hiltData = {
            name: this.hiltName,
            material: this.hiltMaterial,
            crystal: this.hiltCrystal,
            activator: this.hiltActivator
        };
        const bladeData = {
            name: this.bladeName,
            color: this.bladeColor
        };
        const hilt = new Hilt(hiltData);
        this.print('Hilt built!');

        const blade = [new Blade(bladeData)];
        this.print('Blade built!');

        this.lightsaber = new Lightsaber({name: this.lightsaberName, hilt: hilt, blades: blade});
        this.print('Lightsaber built!');
    }

    getLightsaber() {
        return this.lightsaber;
    }
}
