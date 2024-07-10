import React, { Component } from 'react';
import './App.css';
import TopBar from './components/topBar/topBar'
import Vehicule from './models';
//import yourClass from './models'; //import your class

//pour recuperer des données: 
// etape 1:
// il faut créé un tableaux dans le state
// etape 2:
// dans le componentDidMount on fait un fetch pour recuperer les données
// etape 3:
// on met les données dans le tableau du state
// etape 4:
// il faut creer une classe dans le fichier models.js et importer votres classe ici
// etape 5:
// creer une instance a partir de votre modèle
// etape 6:
// faites les traitements de donénes que vous souhaitez
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

    //instances
    //cosnt yourInstance = this.state.youtTable.map(vehicleData => new Vehicule(vehicleData));
    const vehicleInstances = this.state.vehicles.map(vehicleData => new Vehicule(vehicleData));

    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
        <body>
          <p>test</p>
          {
            vehicleInstances.map(vehicle => (
              <div key={vehicle.id_Vehicules}>
                <h2>{vehicle.brand} {vehicle.model} {vehicle.motorisation}</h2>
                <p>Technologie: {vehicle.technology}</p>
                {vehicle.technology === "électrique" && <p>
                  Consommation: {vehicle.consumption} kwh/100km (equivalent {vehicle.consumption/10} l/100km)
                </p>}
                {vehicle.technology === "diesel" && <p>
                  {/*https://fr.wikipedia.org/wiki/Discussion:Empreinte_carbone#:~:text=1%20litre%20de%20diesel%20%3D%2038,68%20MJ%20%3D%2010%2C74%20kWh*/}
                  Consommation: {vehicle.consumption} l/100km eq ({vehicle.consumption*10.74} kwh/100km)
                </p>}
                {vehicle.technology === "essence" && <p>
                  {/*https://ressources-naturelles.canada.ca/efficacite-energetique/efficacite-energetique-transports-carburants-remplacement/vehicules-personnels/choisir-bon-vehicule/achat-dun-vehicule-electrique/explication-des-tableaux/21384*/}
                  Consommation: {vehicle.consumption} l/100km (equivalent {vehicle.consumption*8.9} l/100km)
                </p>}
                <p>Impact de construction: {vehicle.buildImpact} tonnes CO2</p>
                <p>Source: {vehicle.source}</p>
              </div>
            ))
          }
        </body>
        <footer>
          
        </footer>
      </div>
    );
  }
}

export default App;
