// MyComponent.js
import React, { Component } from 'react';
import './VehicleElem.css';
import Vehicle from '../models';

const VehicleElem = (props) => {
    const { vehicle, handleReturnToList, handleShowSources } = props;

    return (
        <div id="vehicleElemSection" className="lightBorder">
            <div id="vehicleElemHeader">
                <h2>{vehicle && vehicle.brand} {vehicle && vehicle.model} {vehicle && vehicle.motorisation}</h2>
                <button className="classicButton classicSize" onClick={handleReturnToList}>select a car</button>
            </div>
            <div className="separator darkBorder"></div>
            <div id="vehicleStats" className="classicFont">
                <p>Type: {vehicle && vehicle.type}</p>
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
                <p>Impact de fabrication: {vehicle && vehicle.buildImpact} tonnes CO2</p>
                <p>Impact direct à l'utilisation: {vehicle.useImpact} gCO2/km</p>
                <p>Puissance: {vehicle && vehicle.enginePower} chevaux</p>
                <button className="classicButton classicSize" onClick={handleShowSources}>sources</button>
            </div>
        </div>
    );
}

export default VehicleElem;