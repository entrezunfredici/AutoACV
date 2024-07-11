// MyComponent.js
import React, { Component } from 'react';
import './VehicleElem.css';
import Vehicle from '../models';

const VehicleElem = (props) => {
    const { vehicle, handleReturnToList } = props;

    return (
        <div id="vehicleElemSection" className="lightBorder">
            <div id="vehicleElemHeader">
                <h2>{vehicle && vehicle.brand} {vehicle && vehicle.model} {vehicle && vehicle.motorisation}</h2>
                <button className="classicButton" onClick={handleReturnToList}>select a car</button>
            </div>
            <div className="separator"></div>
            <div id="vehicleStats">
                <p>Technologie: {vehicle && vehicle.technology}</p>
                {vehicle && vehicle.technology === "electric" && (
                    <p>Consommation: {vehicle.consumption} kwh/100km</p>
                )}
                {vehicle && (vehicle.technology === "diesel" || vehicle.technology === "hybrid-diesel") && (
                    <p>
                        Consommation: {vehicle.consumption.toFixed(2)} l/100km (équivalent {(vehicle.consumption * 10.74).toFixed(2)} kwh/100km)
                    </p>
                )}
                {vehicle && (vehicle.technology === "gasoline" || vehicle.technology === "petrol" || vehicle.technology === "hybrid") && (
                    <p>
                        Consommation: {vehicle.consumption.toFixed(2)} l/100km (équivalent {(vehicle.consumption * 8.9).toFixed(2)} kwh/100km)
                    </p>
                )}
                {vehicle && (vehicle.technology === "rechargeable-hybrid-diesel" && (
                    <p>
                        Consommation: {vehicle.consumption.toFixed(2)} l/100km (équivalent {(vehicle.consumption * 10.74).toFixed(2)} kwh/100km)
                    </p>
                ))}
                {vehicle && vehicle.technology === "rechargeable hybrid" && (
                    <p>
                        Consommation: {vehicle.consumption.toFixed(2)} l/100km (équivalent {(vehicle.consumption * 8.9).toFixed(2)} kwh/100km)
                    </p>
                )}
                <p>Impact de construction: {vehicle && vehicle.buildImpact} tonnes CO2</p>
                <p>Puissance: {vehicle && vehicle.enginePower} chevaux</p>
                <button className="classicButton">sources</button>
            </div>
        </div>
    );
}

export default VehicleElem;