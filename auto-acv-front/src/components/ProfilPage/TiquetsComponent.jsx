import React from 'react';
import TiquetComponent from './TiquetComponent';
import {jwtDecode} from 'jwt-decode';

class TiquetsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiquetsVehicules: [],
      tiquetsSources: [],
      tiquetsMixs: []
    };
  }

  componentDidMount() {
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const id = decodedToken.data.id_Users;
    console.log(this.state.tiquetsVehicules);
    console.log(this.state.tiquetsSources);
    console.log(this.state.tiquetsMixs);
    fetch('http://localhost:8000/tiquetsVehicules')
      .then((response) => response.json())
      .then((data) => {
        const userTiquets = data.tiquetsVehicules.filter(tiquet => tiquet.id_user === id);
        this.setState({ tiquetsVehicules: userTiquets });
      });
    fetch('http://localhost:8000/tiquetsSources')
      .then((response) => response.json())
      .then((data) => {
        const userTiquets = data.tiquetsSources.filter(tiquet => tiquet.id_user === id);
        this.setState({ tiquetsSources: userTiquets });
      });
    fetch('http://localhost:8000/tiquetsMixs')
      .then((response) => response.json())
      .then((data) => {
        const userTiquets = data.tiquetsMixs.filter(tiquet => tiquet.id_user === id);
        this.setState({ tiquetsMixs: userTiquets });
      });
    }

  handleDeleteVehicleTiquet = (id) => {
    this.setState(prevState => ({
      tiquetsVehicules: prevState.tiquetsVehicules.filter(tiquet => tiquet.id_tiquetVehicules !== id)
    }));
  };
  handleDeleteSourceTiquet = (id) => {
    this.setState(prevState => ({
      tiquetsSources: prevState.tiquetsSources.filter(tiquet => tiquet.id_tiquetSource !== id)
    }));
  };
  handleDeleteMixTiquet = (id) => {
    this.setState(prevState => ({
      tiquetsMixs: prevState.tiquetsMixs.filter(tiquet => tiquet.id_tiquetMix !== id)
    }));
  };
  
  render() {
    return (
      <div className='tiquetConteiner'>
        <h2>Véhicules</h2>
        {this.state.tiquetsVehicules.map((tiquet) => (
          <div className='tiquetItem'>
            <TiquetComponent key={`vehicule-${tiquet.id_tiquetVehicules}`} tiquet={tiquet} onDelete={this.handleDeleteVehicleTiquet} />
          </div>
        ))}
        <h2>Sources</h2>
        {this.state.tiquetsSources.map((tiquet) => (
          <div className='tiquetItem'>
            <TiquetComponent key={`source-${tiquet.id_tiquetSource}`} tiquet={tiquet} onDelete={this.handleDeleteSourceTiquet} />
          </div>
        ))}
        <h2>Mixs</h2>
        {this.state.tiquetsMixs.map((tiquet) => (
          <div className='tiquetItem'>
            <TiquetComponent key={`mix-${tiquet.id_tiquetMix}`} tiquet={tiquet} onDelete={this.handleDeleteMixTiquet} />
          </div>
        ))}
      </div>
    );
  }
}

export default TiquetsComponent;