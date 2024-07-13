// MyComponent.js
import React, { Component } from 'react';
import './Graph.css';
import Chart from 'chart.js/auto'; 
import { getRelativePosition } from 'chart.js/helpers';

class Graph extends Component {

    calculateCO2Impact = (vehicles, energiesImpact, vehiclesDutyCycle, totaldistance, Δdistance) => {
        if (!vehicles || !energiesImpact || !vehiclesDutyCycle)return 0;
        if(!Δdistance)Δdistance=100;
        if(!totaldistance)totaldistance=500000;

        let vehicleImpact = [];
        let defaultImpacts = [vehicles[0].buildImpact*1000, vehicles[1].buildImpact*1000];
        for (let i = 0; i < totaldistance / Δdistance; i++){
            vehicleImpact.push(
                {
                    "distance": (i*Δdistance),
                    "car 1": (i*Δdistance) * (((vehicles[0].consumption/100) * energiesImpact[0] + vehicles[0].useImpact)/1000) + defaultImpacts[0],
                    "car 2": (i*Δdistance) * (((vehicles[1].consumption/100) * energiesImpact[1] + vehicles[1].useImpact)/1000) + defaultImpacts[1],
                }
            );
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
        console.log()
        const values = this.calculateCO2Impact(vehicles, energyImpacts, [500000,500000], 500000, 100);
        console.log(values);

        const labels = values.map(value => value.distance);
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First Dataset',
                car1: values.map(value => value["car 1"]),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                car2: values.map(value => value["car 2"]),
            }]
        };


        return (
            <div></div>
        );
    }
}

export default Graph;
