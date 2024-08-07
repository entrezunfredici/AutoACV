// MyComponent.js
import React, { Component } from 'react';
import './vehicleSelector.css';
import VehicleElem from '../VehicleElem/VehicleElem';
import { Link } from 'react-router-dom';

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
        const { vehicles, classes, onVehicleSelect, index } = this.props;
        const token = localStorage.getItem('token');
        return (
            <div id="vehicleSelector" className={classes}>
                {this.state.showVehicle && (
                    <div id="selectedVehicle">
                        <VehicleElem vehicle={this.state.vehicle} handleReturnToList={this.handleReturnToList} handleShowSources={this.handleShowSources}/>
                    </div>
                )}
                {this.state.showVehicleList && (
                    <div id="vehicleList">
                        {token ? (
                            <Link to="/vehicles"><button className="blockButton" >modify Vehicles</button></Link>
                        ):(<p></p>)}
                            {/* {vehicles && vehicles.slice(0, 10).map((vehicle) => ( */}
                        {vehicles && vehicles.map(vehicle => (
                            <div key={vehicle.id_Vehicules} className="vehicleAffiche lightBorder">
                                <div id="vehicleElemHeader">
                                    <h2>{vehicle.brand} {vehicle.model} {vehicle.motorisation}</h2>
                                </div>
                                <div className="separator darkBorder"></div>
                                <div id="vehicleStats" className="classicFont">
                                    <p>Type: {vehicle.type}</p>
                                    <p>Technologie: {vehicle.technology}</p>
                                    {vehicle.technology === "electric" && (
                                        <p>Consommation: {vehicle.consumption} kwh/100km</p>
                                    )}
                                    {(vehicle.technology === "diesel" || vehicle.technology === "hybrid-diesel") && (
                                        <p>
                                            Consommation: {(vehicle.consumption/10.74).toFixed(2)} l/100km (équivalent {vehicle.consumption.toFixed(2)} kwh/100km)
                                        </p>
                                    )}
                                    {(vehicle.technology === "gasoline" || vehicle.technology === "petrol" || vehicle.technology === "hybrid") && (
                                        <p>
                                            Consommation: {(vehicle.consumption/8.9).toFixed(2)} l/100km (équivalent {vehicle.consumption.toFixed(2)} kwh/100km)
                                        </p>
                                    )}
                                    {(vehicle.technology === "bioethanol" || vehicle.technology === "bioethanol-hybrid") && (
                                        <p>
                                            Consommation: {(vehicle.consumption/6.33).toFixed(2)} l/100km (équivalent {vehicle.consumption.toFixed(2)} kwh/100km)
                                        </p>
                                    )}
                                    {vehicle.technology === "rechargeable-hybrid-diesel" && (
                                        <p>
                                            Consommation: {(vehicle.consumption/10.74).toFixed(2)} l/100km (équivalent {vehicle.consumption.toFixed(2)} kwh/100km)
                                        </p>
                                    )}
                                    {vehicle.technology === "rechargeable hybrid" && (
                                        <p>
                                            Consommation: {(vehicle.consumption/8.9).toFixed(2)} l/100km (équivalent {vehicle.consumption.toFixed(2)} kwh/100km)
                                        </p>
                                    )}
                                    <p>Impact de fabrication: {vehicle.buildImpact} tonnes CO2</p>
                                    <p>Impact direct à l'utilisation: {vehicle.useImpact} gCO2/km</p>
                                    <p>Puissance: {vehicle.enginePower} chevaux</p>
                                    <button className="classicButton classicSize" onClick={() => {
                                        this.handleVehicleSelect(vehicle); 
                                        onVehicleSelect(index, vehicle);
                                    }}>select this vehicle</button>
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
