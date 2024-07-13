// MyComponent.js
import React, { Component } from 'react';
import './Graph.css';
import { Chart as ChartJS } from 'chart.js/auto';

class Graph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.renderChart();
    }

    componentDidUpdate() {
        this.renderChart();
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    renderChart() {
        const { vehicles, colors, energyImpacts } = this.props;

        if (!vehicles || vehicles.length === 0 || !vehicles[0] || !vehicles[1]) {
        return;
    }

    let values = this.calculateCO2Impact(vehicles, energyImpacts, [500000, 500000], 500000, 1000);

    const data = {
        labels: values.map(value => value.distance),
        datasets: [
            {
                label: vehicles[0].brand + " " + vehicles[0].model + " " + vehicles[0].motorisation,
                data: values.map(value => value[vehicles[0].brand + " " + vehicles[0].model + " " + vehicles[0].motorisation]),
                fill: false,
                borderColor: colors[0] || 'rgb(255, 0, 0)',
                tension: 0.1,
            },
            {
                label: vehicles[1].brand + " " + vehicles[1].model + " " + vehicles[1].motorisation,
                data: values.map(value => value[vehicles[1].brand + " " + vehicles[1].model + " " + vehicles[1].motorisation]),
                fill: false,
                borderColor: colors[1] || 'rgb(0, 255, 0)',
                tension: 0.1,
            },
        ],
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'CO2 Impact Over Distance',
                },
            },
        },
    };

    if (this.chart) {
        this.chart.destroy();
    }

    const ctx = this.chartRef.current.getContext('2d');
        this.chart = new ChartJS(ctx, config); // Utilisez le nom renommé ici
    }


    calculateCO2Impact = (vehicles, energiesImpact, vehiclesDutyCycle, totaldistance, Δdistance) => {
        if (!vehicles || !energiesImpact || !vehiclesDutyCycle)return 0;
        if(!Δdistance)Δdistance=1000;
        if(!totaldistance)totaldistance=500000;

        let vehicleImpact = [];
        let defaultImpacts = [vehicles[0].buildImpact*1000, vehicles[1].buildImpact*1000];
        for (let i = 0; i < totaldistance / Δdistance; i++){
            vehicleImpact.push(
                {
                    "distance": (i*Δdistance),
                    [vehicles[0].brand + " " + vehicles[0].model + " " + vehicles[0].motorisation]: (i*Δdistance) * (((vehicles[0].consumption/100) * energiesImpact[0] + vehicles[0].useImpact)/1000) + defaultImpacts[0],
                    [vehicles[1].brand + " " + vehicles[1].model + " " + vehicles[1].motorisation]: (i*Δdistance) * (((vehicles[1].consumption/100) * energiesImpact[1] + vehicles[1].useImpact)/1000) + defaultImpacts[1],
                }
            );
        }
        return vehicleImpact;
    }

    render() {
        const { vehicles } = this.props;

        // Assurez-vous que vehicles existe et contient au moins un élément
        if (!vehicles || vehicles.length === 0 || !vehicles[0] || !vehicles[1]) {
            return <div>No vehicles available</div>;
        }

        return (
            <div id="graphDiv">
                <canvas ref={this.chartRef} />
            </div>
        );
    }
}

export default Graph;
