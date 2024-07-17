import React from 'react';
import TiquetComponent from './TiquetComponent';
import {jwtDecode} from 'jwt-decode';

class TiquetsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiquetsVehicules: [],
    };
  }

  componentDidMount() {
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const id = decodedToken.data.id_Users;

    fetch('http://89.116.110.208:9000/tiquetsVehicules')
      .then((response) => response.json())
      .then((data) => {
        const userTiquets = data.tiquetsVehicules.filter(tiquet => tiquet.id_user === id);
        this.setState({ tiquetsVehicules: userTiquets });
      });
  }

  handleDelete = (id) => {
    this.setState(prevState => ({
      tiquetsVehicules: prevState.tiquetsVehicules.filter(tiquet => tiquet.id_tiquetVehicules !== id)
    }));
  };
  
  render() {
    return (
      <div className='tiquetConteiner'>
        {this.state.tiquetsVehicules.map((tiquet) => (
          <div className='tiquetItem'>
            <TiquetComponent key={tiquet.id_tiquetVehicules} tiquet={tiquet} onDelete={this.handleDelete} />
          </div>
        ))}
      </div>
    );
  }
}

export default TiquetsComponent;