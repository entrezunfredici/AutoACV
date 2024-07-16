import React from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

import './AffichInfoUserStyle.css';

function AffichInfoUserComponent() {

  const navigate = useNavigate();

  const decodedToken = jwtDecode(localStorage.getItem('token'));

  console.log(decodedToken);

  function SignOut() {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div class="infoUtilisateur">
      <p><strong>Username :&nbsp;</strong>{decodedToken.data.username}</p>
      <p><strong>Mail :&nbsp;</strong>{decodedToken.data.mail}</p>
      <div className='buttonsCont'>
        <a onClick={() => navigate('/profil/PasswordChange')}>Changer de mot de passe</a>
        <a onClick={() => navigate('/profil/ModifyProfil')}>Modifier le profil</a>
      </div>
      <button onClick={SignOut} className='cancelButton'>Se deconnecter</button>
    </div>

  );
}

export default AffichInfoUserComponent;