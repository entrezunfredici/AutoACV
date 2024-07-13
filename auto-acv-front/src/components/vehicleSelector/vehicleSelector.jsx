// MyComponent.js
import React, { Component } from 'react';
import './vehicleSelector.css';
import VehicleElem from '../VehicleElem/VehicleElem';

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
            showVehicleList: true,
            showSources: false
        });
    }

    handleShowSources = () => {
        this.setState({
            showSources: true
        });
    }   

    handleHideSources = () => {
        this.setState({
            showSources: false
        });
    }

    render() {
        const { vehicles } = this.props;
        const { classes } = this.props;
        return (
            <div id="vehicleSelector" className={classes}>
                {this.state.showVehicle && (
                    <div id="selectedVehicle">
                        <VehicleElem vehicle={this.state.vehicle} handleReturnToList={this.handleReturnToList} handleShowSources={this.handleShowSources}/>
                    </div>
                )}
                {this.state.showVehicleList && (
                    <div id="vehicleList">
                        {vehicles && vehicles.map(vehicle => (
                            <div key={vehicle.id_Vehicules} className="vehicleAffiche lightBorder">
                                <div id="vehicleElemHeader">
                                    <h2>{vehicle.brand} {vehicle.model} {vehicle.motorisation}</h2>
                                </div>
                                <div className="separator darkBorder"></div>
                                <div id="vehicleStats" className="classicFont">
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
                                    <p>Impact de fabrication: {vehicle.buildImpact} tonnes CO2</p>
                                    <p>Impact direct à l'utilisation: {vehicle.useImpact} gCO2/km</p>
                                    <p>Puissance: {vehicle.enginePower} chevaux</p>
                                    <button className="classicButton classicSize" onClick={() => this.handleVehicleSelect(vehicle)}>select this vehicle</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {this.state.showSources && (
                    <div id="sources">
                        <h2>Sources</h2>
                        <div id="sourcesElem">
                            {this.state.vehicle && this.state.vehicle.source}
                        </div>
                        <button className="classicButton" onClick={this.handleHideSources}>hide sources</button>
                    </div>
                )}
            </div>
        );
    }
}

export default VehicleSelector;
