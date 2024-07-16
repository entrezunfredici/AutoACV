import React from 'react';
import TiquetComponent from './TiquetComponent';

class TiquetsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiquetsVehicules: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/tiquetsVehicules')
      .then((response) => response.json())
      .then((data) => this.setState({ tiquetsVehicules: data.tiquetsVehicules }));
  }

  render() {
    return (
      <div>
        {this.state.tiquetsVehicules.map((tiquet) => (
          <TiquetComponent key={tiquet.id_tiquetVehicules} tiquet={tiquet} />
        ))}
      </div>
    );
  }
}

export default TiquetsComponent;