import React, { Component } from 'react';
import './App.css';
import TopBar from './components/topBar/topBar'
import VehicleSelector from './components/VehicleSelector/VehicleSelector';
import EnergyMixSelector from './components/EnergyMixSelector/EnergyMixSelector';
import Vehicule from './components/models';
//import yourClass from './models'; //import your class

//pour recuperer des données: 
// etape 1:
// il faut créé un tableaux dans le state
// etape 2:
// dans le componentDidMount on fait un fetch pour recuperer les données
// etape 3:
// on met les données dans le tableau du state
//
// pour ce faire vous pouvez vous inspirer de ce qui a déja été fait 

class App extends Component {
  state = {
    //yourTable: [],
    vehicles: [],
    energyMixes: [],
    powerSources: [],
    energyMix: null, //selected energy mix
  }

  componentDidMount(){

    //get vehicules list
    fetch('http://localhost:8000/vehicules').then(response => response.json()).then(data => {
      if (Array.isArray(data.vehicules)) {
        this.setState({ vehicles: data.vehicules });
      } else {
        console.error('Les données reçues ne sont pas un tableau', data.vehicules);
      }
    });
    //get powerSources list
    fetch('http://localhost:8000/sourcesEnergies').then(response => response.json()).then(data => {
      if (Array.isArray(data.powerSources)) {
        this.setState({ powerSources: data.powerSources });
      } else {
        console.error('Les données reçues ne sont pas un tableau', data.powerSources);
      }
    });
    //get energymix list
    fetch('http://localhost:8000/mixsEnergetiques').then(response => response.json()).then(data => {
      if (Array.isArray(data.mixs)) {
        this.setState({ energyMixes: data.mixs });
      } else {
        console.error('Les données reçues ne sont pas un tableau', data.mixs);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
        <main>
          <EnergyMixSelector energyMixes={this.state.energyMixes} powerSources={this.state.powerSources} />
          <section id="vehiclesSelectors">
            <div id="car1" class="vehicleSelectorUnit darkBorder">
              <VehicleSelector vehicles={this.state.vehicles} classes={"primary"}/>
            </div>
            <div id="car2" class="vehicleSelectorUnit">
              <VehicleSelector vehicles={this.state.vehicles} classes={"secondary"}/>
            </div>
          </section>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
