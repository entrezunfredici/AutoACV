import React, { Component } from 'react';
import './EnergyMixSelector.css';

class EnergyMixSelector extends Component {
    state = {
        energyMix: null, // selected energy mix
        elecImpact: 0,   // calculated electricity impact
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.energyMix !== this.state.energyMix) {
            const elecImpact = this.calculateElectricityImpact(this.state.energyMix, this.props.powerSources);
            this.setState({ elecImpact }, () => {
                this.props.handleElectrictyImpact(elecImpact);
            });
        }
    }

    handleEnergyMixChange = (event) => {
        const selectedCountry = event.target.value;
        const selectedEnergyMix = this.props.energyMixes.find(energyMix => energyMix.country === selectedCountry);
        this.setState({ energyMix: selectedEnergyMix });
    }

    calculateElectricityImpact = (energyMix, powerSources) => {
        if (!energyMix) return 0;

        let sum = 0;
        let count = 0;

        for (let key in energyMix) {
            if (energyMix.hasOwnProperty(key) && typeof energyMix[key] === 'number') {
                const powerSource = powerSources.find(powerSource => powerSource.powerSource_name === key);
                if (powerSource) {
                    sum += (energyMix[key] * powerSource.powerSource_impact);
                    count += energyMix[key];
                }
            }
        }

        return count > 0 ? sum / count : 0;
    }

    render() {
        const { energyMixes } = this.props;
        const { elecImpact } = this.state;

        return (
            <div id="energyMixSelector" className="classicFont">
                <select
                    name="energyMixes"
                    id="energyMix"
                    className="classicSize copperBorder"
                    onChange={this.handleEnergyMixChange}
                >
                    <option value="0">Select energy mix</option>
                    {energyMixes && energyMixes.map(energyMix => (
                        <option key={energyMix.country} value={energyMix.country}>{energyMix.country}</option>
                    ))}
                </select>
                <div id="textSection">
                    <p>
                        en moyenne {elecImpact} g de CO² pa kWh 
                    </p>
                </div>
            </div>
        );
    }
}

export default EnergyMixSelector;
