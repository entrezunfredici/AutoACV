import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import TopBar from './components/topBar/topBar'
import VehicleSelector from './components/VehicleSelector/VehicleSelector';
import EnergyMixSelector from './components/EnergyMixSelector/EnergyMixSelector';
import SignInForm from './components/forms/signInForm';
import SignUpForm from './components/forms/signUpForm';
import PasswordChangeForm from './components/ProfilPage/PasswordChangeForm';
import ProfilPage from './components/ProfilPage/ProfilPage';
import ModifyProfilForm from './components/ProfilPage/ModifyProfilForm';
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
      //<div className="App lightTheme">
      <div className="App darkTheme">
        <body className="App-header">
          <Router>
            <Routes>
              <Route path="/" element={
                <main>
                  <TopBar />
                  <section id="EnergyMixSelector" class="mainSections">
                    <EnergyMixSelector energyMixes={this.state.energyMixes} powerSources={this.state.powerSources} />
                  </section>
                  <section id="vehiclesSelectors" class="mainSections">
                    <div id="car1" class="vehicleSelectorUnit darkBorder">
                      <VehicleSelector vehicles={this.state.vehicles} classes={"primary"}/>
                    </div>
                    <div id="car2" class="vehicleSelectorUnit">
                      <VehicleSelector vehicles={this.state.vehicles} classes={"secondary"}/>
                    </div>
                  </section>
                </main>
              } />
              <Route path="/login" element={
                <main>
                  <TopBar />
                  <SignInForm />
                </main>
              } />
              <Route path="/register" element={
                <main>
                  <TopBar />
                  <SignUpForm />
                </main>
              } />
              <Route path="/profil" element={
              
                <main>
                  <TopBar />
                  <ProfilPage />
                </main>
              } />
              <Route path="/profil/PasswordChange" element={
                <main>
                  <TopBar />
                  <PasswordChangeForm />
                </main>
              } />
              <Route path="/profil/ModifyProfil" element={
                <main>
                  <TopBar />
                  <ModifyProfilForm />
              </main>
              } />
            </Routes>
          </Router>
        </body>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
