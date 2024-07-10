//this documents contains all classes for this app

//your class
// class ... {
//     constructor(data) {
//         this.id = data.id;
//         this.name = data.name;
//         this...
//     }
//}
// export default ...;

//vehicules class
class Vehicule {
    constructor(data) {
        this.id_Vehicules = data.id_Vehicules;
        this.brand = data.brand;
        this.model = data.model;
        this.motorisation = data.motorisation;
        this.consumption = data.consumption;
        this.buildImpact = data.buildImpact;
        this.enginePower = data.enginePower;
        this.recycleImpact = data.recycleImpact;
        this.source = data.source;
        this.technology = data.technology;
        this.type = data.type;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

export default Vehicule;
