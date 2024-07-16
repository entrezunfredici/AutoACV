import React from 'react';
import AffichInfoUserComponent from './AffichInfoUserComponent';
import TiquetsUtilisateurComponent from './TiquetsUtilisateurComponent';
import './ProfilPage.css';

function ProfilPage() {
  return (
    <div className="profilPage">
      <div className="profilInfo">
        <h1>Profil Utilisateur</h1>
        <AffichInfoUserComponent />
      </div>
      <TiquetsUtilisateurComponent />
    </div>
  );
}

export default ProfilPage;