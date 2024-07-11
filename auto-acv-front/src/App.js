import React, { Component } from 'react';
import './App.css';
import TopBar from './components/topBar/topBar'
import VehicleSelector from './components/VehicleSelector/VehicleSelector';
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
    vehicles: []
  }

  componentDidMount(){

    //get vehicules list in console for example
    fetch('http://localhost:8000/vehicules').then(response => response.json()).then(data => {
      if (Array.isArray(data.vehicules)) {
        this.setState({ vehicles: data.vehicules });
      } else {
        console.error('Les données reçues ne sont pas un tableau', data.vehicules);
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
          <section id="vehiclesSelectors">
            <div id="car1" class="vehicleSelectorUnit">
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
