// MyComponent.js
import React, { Component } from 'react';
import './Graph.css';

class Graph extends Component {
    state = {
        vehicle: null,
        showVehicle: false,
        showVehicleList: true
    }

    calculateCO2Impact = (vehicle, energyImpacts, vehicleDutyCycle, totaldistance, Δdistance) => {
        if (!vehicle || !energyImpacts || !vehicleDutyCycle)return 0;
        if(!Δdistance)Δdistance=100;
        if(!totaldistance)totaldistance=500000;

        let vehicleImpact = [];
        let defaultImpact = vehicle.buildImpact*1000;
        for (let i = 0; i < totaldistance / Δdistance; i++){
            // if((i*Δdistance)%vehicleDutyCycle){
            //     defaultImpact += vehicle.recycleImpact + vehicle.buildImpact;
            // }
            console.log(((i*Δdistance) * ((vehicle.consumption/100) * energyImpacts + vehicle.useImpact))/1000 + defaultImpact);
            vehicleImpact.push((i*Δdistance) * ((vehicle.consumption/100) * energyImpacts + vehicle.useImpact) + defaultImpact);
        }
        return vehicleImpact;
    }

    render() {
        const { vehicles, colors, energyImpacts } = this.props;
        
        // Assurez-vous que vehicles existe et contient au moins un élément
        if (!vehicles || vehicles.length === 0) {
            return <div>No vehicles available</div>;
        }
        
        // Appelez la fonction calculateCO2Impact ici
        const co2Impacts = this.calculateCO2Impact(vehicles[0], 22, 500000, 500000, 100);

        return (
            <div>
                {co2Impacts && co2Impacts.map(co2Impact => (
                    <p>Value: {co2Impact}</p>
                ))}
            </div>
        );
    }
}

export default Graph;
