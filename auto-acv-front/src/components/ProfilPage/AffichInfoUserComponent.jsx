import React from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

import './AffichInfoUserStyle.css';

function AffichInfoUserComponent() {

  const navigate = useNavigate();

  const decodedToken = jwtDecode(localStorage.getItem('token'));

  console.log(decodedToken);

  return (
    <div class="infoUtilisateur">
      <h1>Profil Utilisateur</h1>
      <p>Username :&nbsp;{decodedToken.data.username}</p>
      <p>Mail :&nbsp;{decodedToken.data.mail}</p>
      <a onClick={() => navigate('/profil/PasswordChange')}>Changer de mot de passe</a>
      <a onClick={() => navigate('/profil/ModifyProfil')}>Modifier le profil</a>
    </div>

  );
}

export default AffichInfoUserComponent;