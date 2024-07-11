// MyComponent.js
import React, { Component } from 'react';
import './vehicleSelector.css';
import VehicleElem from '../VehicleElem/VehicleElem';
import Vehicle from '../models';

class VehicleSelector extends Component {
    state = {
        vehicle: null,
        showVehicle: false,
        showVehicleList: true
    }

    handleVehicleSelect = (vehicle) => {
        this.setState({
            vehicle: vehicle,
            showVehicle: true,
            showVehicleList: false
        });
    };

    handleReturnToList = () => {
        this.setState({
            vehicle: null,
            showVehicle: false,
            showVehicleList: true
        });
    }

    render() {
        console.log(this.state.showVehicleList)
        const { vehicles } = this.props;
        const { classes } = this.props;
        console.log(classes)
        return (
            <div id="vehicleSelector" className={classes}>
                {this.state.showVehicle && (
                    <div id="selectedVehicle">
                        <VehicleElem vehicle={this.state.vehicle} handleReturnToList={this.handleReturnToList} />
                    </div>
                )}
                {this.state.showVehicleList && (
                    <div id="vehicleList">
                        {vehicles && vehicles.map(vehicle => (
                            <div key={vehicle.id_Vehicules} className="vehicleAffiche darkBorder">
                                <h2>{vehicle.brand} {vehicle.model} {vehicle.motorisation}</h2>
                                <div className="separator"></div>
                                <p>Technologie: {vehicle.technology}</p>
                                {vehicle.technology === "electric" && (
                                    <p>Consommation: {vehicle.consumption} kwh/100km</p>
                                )}
                                {(vehicle.technology === "diesel" || vehicle.technology === "hybrid-diesel") && (
                                    <p>
                                        Consommation: {vehicle.consumption.toFixed(2)} l/100km (équivalent {(vehicle.consumption * 10.74).toFixed(2)} kwh/100km)
                                    </p>
                                )}
                                {(vehicle.technology === "gasoline" || vehicle.technology === "petrol" || vehicle.technology === "hybrid") && (
                                    <p>
                                        Consommation: {vehicle.consumption.toFixed(2)} l/100km (équivalent {(vehicle.consumption * 8.9).toFixed(2)} kwh/100km)
                                    </p>
                                )}
                                {vehicle.technology === "rechargeable-hybrid-diesel" && (
                                    <p>
                                        Consommation: {vehicle.consumption.toFixed(2)} l/100km (équivalent {(vehicle.consumption * 10.74).toFixed(2)} kwh/100km)
                                    </p>
                                )}
                                {vehicle.technology === "rechargeable hybrid" && (
                                    <p>
                                        Consommation: {vehicle.consumption.toFixed(2)} l/100km (équivalent {(vehicle.consumption * 8.9).toFixed(2)} kwh/100km)
                                    </p>
                                )}
                                <p>Impact de construction: {vehicle.buildImpact} tonnes CO2</p>
                                <p>Puissance: {vehicle.enginePower} chevaux</p>
                                <button className="classicButton" onClick={() => this.handleVehicleSelect(vehicle)}>select this vehicle</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default VehicleSelector;
