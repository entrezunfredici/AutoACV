// MyComponent.js
import React, { Component } from 'react';
import './VehiclePage.css';
import VehicleForm from '../forms/VehicleForm';
import { Link } from 'react-router-dom';

class VehiclePage extends Component {
    state = {
        vehicle: null,
        showVehicle: false,
        showVehicleList: true
    }

    // handleVehicleSelect = (vehicle) => {
    //     this.setState({
    //         vehicle: vehicle,
    //         showVehicle: true,
    //         showVehicleList: false
    //     });
    // };

    render() {
        const { vehicles, onVehicleSelect, index } = this.props;
        return (
            <div id="vehiclePage">
                <div id="vehicleList">
                    {vehicles && vehicles.map(vehicle => (
                        <div key={vehicle.id_Vehicules} className="vehicleAffiche lightBorder">
                            <VehicleForm vehicle={vehicle} onVehicleSelect={onVehicleSelect}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default VehiclePage;
