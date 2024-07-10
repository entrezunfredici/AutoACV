import React, { Component } from 'react';
import './App.css';
import TopBar from './components/topBar/topBar'

class App extends Component {
  state = {
    vehicles: {}
  }

  componentDidMount(){
    //get data from api
    // fetch('http://localhost:8000/...').then((response) => {
    //   return response.json();
    // }).then((data) => {
    //   ...
    // });

    //get vehicules list in console for example
    fetch('http://localhost:8000/vehicules').then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data.vehicules);
      this.setState({vehicles: data.vehicules});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
        <body>

        </body>
        <footer>
          
        </footer>
      </div>
    );
  }
}

export default App;
