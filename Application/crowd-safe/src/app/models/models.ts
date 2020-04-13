export class StateData {
    id: string;
    name: string;
    infected: string;
    deaths: string;
    recovered: string;
    active: string;

    constructor(data: any) {
        this.id = data['id'],
        this.name = IdToStateName[data['id']],
        this.infected = data['infected'],
        this.deaths = data['deaths'],
        this.recovered = data['recovered'],
        this.active = (parseInt(data['infected'])-parseInt(data['deaths'])-parseInt(data['recovered'])).toString()
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

export class HeatMapData {
    location: google.maps.LatLng;
    weight: number;

    constructor(data: any) {
        this.location = new google.maps.LatLng(parseFloat(data['Latitude']),parseFloat(data['Longitude']));
        this.weight = data['Weight'];

    }
}

export enum IdToStateName {
    '000' = 'India',
    '001' = 'Andaman and Nicobar Islands',
    '002' = 'Andhra Pradesh',
    '003' = 'Arunachal Pradesh',
    '004' = 'Assam',
    '005' = 'Bihar',
    '006' = 'Chandigarh',
    '007' = 'Chhattisgarh',
    '008' = 'Dadra and Nagar Haveli',
    '009' = 'Daman and Diu',
    '010' = 'Delhi',
    '011' = 'Goa',
    '012' = 'Gujarat',
    '013' = 'Haryana',
    '014' = 'Himachal Pradesh',
    '015' = 'Jammu and Kashmir',
    '016' = 'Jharkhand',
    '017' = 'Karnataka',
    '018' = 'Kerala',
    '019' = 'Lakshadweep',
    '020' = 'Madhya Pradesh',
    '021' = 'Maharashtra',
    '022' = 'Manipur',
    '023' = 'Meghalaya',
    '024' = 'Mizoram',
    '025' = 'Nagaland',
    '026' = 'Odisha',
    '027' = 'Puducherry',
    '028' = 'Punjab',
    '029' = 'Rajasthan',
    '030' = 'Sikkim',
    '031' = 'Tamil Nadu',
    '032' = 'Tripura',
    '033' = 'Uttar Pradesh',
    '034' = 'Uttarakhand',
    '035' = 'West Bengal',
    '036' = 'Telangana'
}