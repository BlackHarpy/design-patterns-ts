export interface IHilt {
    name: string;
    material: string;
    crystal: string;
    activator: string;
}

export interface IBlade {
    name: string;
    color: string;
}

export interface ILightsaber {
    name: string;
    hilt: IHilt;
    blades: IBlade[];
}

export class Lightsaber implements ILightsaber {
    name: string;
    hilt: IHilt;
    blades: IBlade[];
    constructor(data: ILightsaber) {
        this.name = data.name;
        this.hilt = data.hilt;
        this.blades = data.blades;
    }
}

export class Blade implements IBlade {
    name: string;
    color: string;
    constructor(data: IBlade) {
        this.name = data.name;
        this.color = data.color;
    }
}
export class Hilt implements IHilt {
    name: string;
    material: string;
    crystal: string;
    activator: string;
    constructor(data: IHilt) {
        this.name = data.name;
        this.material = data.material;
        this.crystal = data.crystal;
        this.activator = data.activator;
    }
}