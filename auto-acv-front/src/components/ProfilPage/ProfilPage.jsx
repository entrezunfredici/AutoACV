import React from 'react';
import AffichInfoUserComponent from './AffichInfoUserComponent';
import TiquetsUtilisateurComponent from './TiquetsUtilisateurComponent';
import './ProfilPage.css';

function ProfilPage() {
  return (
    <div className="profilPage">
      <AffichInfoUserComponent />
      <TiquetsUtilisateurComponent />
    </div>
  );
}

export default ProfilPage;