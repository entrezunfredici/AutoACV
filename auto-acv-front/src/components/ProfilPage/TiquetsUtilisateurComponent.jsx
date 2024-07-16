import React, { useState, useEffect } from 'react';
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed accumsan bibendum varius. Nam vitae ligula sed sapien dictum rutrum.
          Integer nec tellus lorem. Praesent nec mollis nisi. 
          Sed tortor est, tincidunt a malesuada et, eleifend sed mi.
          In suscipit purus id lorem sagittis, et commodo nisi venenatis.
          Mauris viverra nisl sed nibh maximus semper. Nulla pharetra nulla eget massa elementum fringilla.
          Donec ac elit in nisi faucibus dictum non eu felis.
        </p>
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