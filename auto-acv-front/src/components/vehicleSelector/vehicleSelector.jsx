// MyComponent.js
import React, { Component } from 'react';
import './vehicleSelector.css';
import Vehicle from '../models';

const VehicleSelector = (props) => {
    const { vehicles } = props;

    return (
        <div id="vehicleSelector">
            {vehicles && vehicles.map(vehicle => (
                <div key={vehicle.id_Vehicules}>
                    <h2>{vehicle.brand} {vehicle.model} {vehicle.motorisation}</h2>
                    <p>Technologie: {vehicle.technology}</p>
                    {vehicle.technology === "electric" && (
                        <p>Consommation: {vehicle.consumption} kwh/100km</p>
                    )}
                    {(vehicle.technology === "diesel" || vehicle.technology === "hybrid-diesel") && (
                        <p>
                            Consommation: {vehicle.consumption} l/100km (équivalent {vehicle.consumption * 10.74} kwh/100km)
                        </p>
                    )}
                    {(vehicle.technology === "gasoline" || vehicle.technology === "petrol" || vehicle.technology === "hybrid") && (
                        <p>
                            Consommation: {vehicle.consumption} l/100km (équivalent {vehicle.consumption * 8.9} kwh/100km)
                        </p>
                    )}
                    {vehicle.technology === "rechargeable-hybrid-diesel" && (
                        <p>
                            Consommation: {vehicle.consumption} l/100km (équivalent {vehicle.consumption * 10.74} kwh/100km)
                        </p>
                    )}
                    {vehicle.technology === "erechargeable hybrid" && (
                        <p>
                            Consommation: {vehicle.consumption} l/100km (équivalent {vehicle.consumption * 8.9} kwh/100km)
                        </p>
                    )}
                    <p>Impact de construction: {vehicle.buildImpact} tonnes CO2</p>
                    <p>Source: {vehicle.source}</p>
                </div>
            ))}
        </div>
    );
}

export default VehicleSelector;