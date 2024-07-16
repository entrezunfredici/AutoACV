import React, { useState, useEffect } from 'react';
import TiquetsComponent from './TiquetsComponent';
import {jwtDecode} from 'jwt-decode';

function TiquetsUtilisateurComponent() {
  // const decodedToken = jwtDecode(localStorage.getItem('token'));
  // const id = decodedToken.data.id_Users;

  // const [data, setData] = useState(null);
  // const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   fetch('http://localhost:8000/users/' + id)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Erreur lors de la récupération des données');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setData(data);
  //     })
  //     .catch(error => {
  //       setErrors(error.message);
  //     });
  // }, []);

  // if (errors) {
  //   return <div>Erreur : {errors}</div>;
  // }

  // if (!data) {
  //   return <div>Chargement...</div>;
  // }

  return (
    <div>
      <h2>Tiquets</h2>
      <div>
        <TiquetsComponent />
      </div>
    </div>
    // <div>
    //   {/* Affichez vos données ici. Par exemple, si les données sont un tableau d'objets : */}
    //   {data.map(item => (
    //     <div key={item.id}>
    //       {/* Remplacez "item.property" par les propriétés réelles de vos objets */}
    //       <p>{item.property}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default TiquetsUtilisateurComponent;