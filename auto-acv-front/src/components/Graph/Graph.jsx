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
        const { vehicles, colors, energyImpacts, totaldistance, Δdistance, dutyCycleMode} = this.props;

        if (!vehicles || vehicles.length === 0 || !vehicles[0] || !vehicles[1]) {
        return;
    }

    let values = this.calculateCO2Impact(vehicles, energyImpacts, totaldistance, Δdistance, dutyCycleMode);

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
        this.chart = new ChartJS(ctx, config);
    }

    calculateCO2Impact = (vehicles, energiesImpact, totaldistance, Δdistance, dutyCycleMode) => {
        if (!vehicles || !energiesImpact)return 0;
        if(!Δdistance)Δdistance=1000;
        if(!totaldistance)totaldistance=500000;

        let vehicleImpact = [];
        let lifecycles = [0, 0];
        for (let i = 0; i <= (totaldistance) / Δdistance; i++){
            let defaultImpacts = [0,0];
            if((lifecycles[0]+1)*vehicles[0].dutyCycle <= i*Δdistance){
                lifecycles[0]++;
            }
            if((lifecycles[1]+1)*vehicles[1].dutyCycle <= i*Δdistance){
                lifecycles[1]++;
            }
            if(dutyCycleMode){
                defaultImpacts = [
                    vehicles[0].buildImpact*1000+lifecycles[0]*((vehicles[0].recycleImpact)*1000), 
                    vehicles[1].buildImpact*1000+lifecycles[1]*((vehicles[1].recycleImpact)*1000)
                ];
            }else{
                defaultImpacts = [
                    vehicles[0].buildImpact*1000+lifecycles[0]*((vehicles[0].buildImpact+vehicles[0].recycleImpact)*1000), 
                    vehicles[1].buildImpact*1000+lifecycles[1]*((vehicles[1].buildImpact+vehicles[1].recycleImpact)*1000)
                ];
            }
            vehicleImpact.push(
            {
                "distance": (i*Δdistance),
                [vehicles[0].brand + " " + vehicles[0].model + " " + vehicles[0].motorisation]: (i*Δdistance) * (((vehicles[0].consumption/100) * energiesImpact[0] + vehicles[0].useImpact)/1000) + defaultImpacts[0],
                [vehicles[1].brand + " " + vehicles[1].model + " " + vehicles[1].motorisation]: (i*Δdistance) * (((vehicles[1].consumption/100) * energiesImpact[1] + vehicles[1].useImpact)/1000) + defaultImpacts[1],
            });
        }
        return vehicleImpact;
    }

    render() {
        const { vehicles } = this.props;

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
