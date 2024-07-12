import React, { Component } from 'react';
import './EnergyMixSelector.css';

class EnergyMixSelector extends Component {
    state = {
        energyMix: null, // selected energy mix
    }

    handleEnergyMixChange = (event) => {
        const selectedCountry = event.target.value;
        const selectedEnergyMix = this.props.energyMixes.find(energyMix => energyMix.country === selectedCountry);
        this.setState({ energyMix: selectedEnergyMix });
    }
    
    calculateKwhImpact = (energyMix) => {
        if (!energyMix) return 0;

        let sum = 0;
        let count = 0;

        for (let key in energyMix) {
            if (energyMix.hasOwnProperty(key) && typeof energyMix[key] === 'number') {
                const powerSource = this.props.powerSources.find(powerSource => powerSource.powerSource_name === key);
                if (powerSource) {
                    sum += (energyMix[key] * powerSource.powerSource_impact);
                    count += energyMix[key];
                }
            }
        }

        return count > 0 ? sum / count : 0;
    }

    render() {
        const { energyMix } = this.state;
        const { energyMixes, powerSources } = this.props;

        const kwhImpact = this.calculateKwhImpact(energyMix);

        return (
            <div id="energyMix">
                <select
                    name="energyMixes"
                    id="energyMix"
                    className="classicSize copperBorder"
                    onChange={this.handleEnergyMixChange}
                >
                    {energyMixes && energyMixes.map(energyMix => (
                        <option key={energyMix.country} value={energyMix.country}>{energyMix.country}</option>
                    ))}
                </select>
                <p>
                    Impact kWh moyen: {kwhImpact}
                </p>
            </div>
        );
    }
}

export default EnergyMixSelector;
