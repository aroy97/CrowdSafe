export class StateData {
    id: string;
    infected: string;
    deaths: string;
    recovered: string;
    tested: string;

    constructor(data: any) {
        this.id = data['id'],
        this.infected = data['infected'],
        this.deaths = data['deaths'],
        this.recovered = data['recovered'],
        this.tested = data['tested']
    }
}

export class StateMapData {
    id: string;
    value: string;
    showLabel: string;

    constructor(data: any) {
        this.id = data['id'];
        this.value = data['infected'];
        this.showLabel = "1";
    }
}