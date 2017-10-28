import {ILightsaberBuilder} from "./builders"

export class Director {

    private builder;

    constructor(builder: ILightsaberBuilder){
        this.builder = builder;
    }

    construct() {
        this.builder.setLightsaberName('Standard Lightsaber');
        this.builder.setHiltName('Standard');
        this.builder.setHiltMaterial('Metal');
        this.builder.setHiltCrystal('Blue Kyber');
        this.builder.setHiltActivator('Force-activated');
        this.builder.setBladeName('Standard');
        this.builder.setBladeColor('Blue');
        this.builder.buildLightSaber();
        return this.builder.getLightsaber()
    }
}