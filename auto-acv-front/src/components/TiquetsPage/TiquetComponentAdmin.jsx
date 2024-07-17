// TiquetComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TiquetComponentAdmin = ({ tiquet, onDelete}) => {
    const navigate = useNavigate();
    console.log(tiquet);

    const deleteTiquetVehicle = () => {
        fetch(`http://localhost:8000/tiquetsVehicules/${tiquet.id_tiquetVehicules}`, {
        method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
              // Appeler la fonction onDelete passée en tant que prop
              onDelete(tiquet.id_tiquetVehicules);
              navigate('/profil');
            } else {
              throw new Error('Erreur lors de la suppression du tiquet');
            }
          })
        .then(data => {
        // Gérer la réponse ici
        console.log(data);
        })
        .catch((error) => {
        // Gérer l'erreur ici
          console.error('Error:', error);
        });
        navigate('/profil');
    };
    const deleteTiquetSource = () => {
      fetch(`http://localhost:8000/tiquetsSources/${tiquet.id_tiquetSource}`, {
      method: 'DELETE',
      })
      .then(response => {
          if (response.ok) {
            // Appeler la fonction onDelete passée en tant que prop
            onDelete(tiquet.id_tiquetSource);
            navigate('/profil');
          } else {
            throw new Error('Erreur lors de la suppression du tiquet');
          }
        })
      .then(data => {
      // Gérer la réponse ici
        console.log(data);
      })
      .catch((error) => {
      // Gérer l'erreur ici
        console.error('Error:', error);
      });
      navigate('/profil');
    };
    const deleteTiquetMix = () => {
      fetch(`http://localhost:8000/tiquetsMixs/${tiquet.id_tiquetMix}`, {
      method: 'DELETE',
      })
      .then(response => {
          if (response.ok) {
            // Appeler la fonction onDelete passée en tant que prop
            onDelete(tiquet.id_tiquetMix);
            navigate('/profil');
          } else {
            throw new Error('Erreur lors de la suppression du tiquet');
          }
        })
      .then(data => {
      // Gérer la réponse ici
        console.log(data);
      })
      .catch((error) => {
      // Gérer l'erreur ici
      console.error('Error:', error);
      });
      navigate('/profil');
    };
    return (
      tiquet.id_tiquetVehicules ? (
        <div>
            <h2>{tiquet.brand} {tiquet.model}</h2>
            <p>Créé le: {new Date(tiquet.createdAt).toLocaleDateString()}</p>
            <p>Mis à jour le: {new Date(tiquet.updatedAt).toLocaleDateString()}</p>
            <p>Source: <a href={tiquet.source}>Lien</a></p>
            <button onClick={deleteTiquetVehicle} className='cancelButton'>Supprimer</button>
        </div>
      ) : tiquet.id_tiquetSource ? (
        <div>
            <h2>{tiquet.id_tiquetSource}</h2>
            <p>Créé le: {new Date(tiquet.createdAt).toLocaleDateString()}</p>
            <p>Mis à jour le: {new Date(tiquet.updatedAt).toLocaleDateString()}</p>
            <p>Source: <a href={tiquet.source}>Lien</a></p>
            <button onClick={deleteTiquetSource} className='cancelButton'>Supprimer</button>
        </div>
      ) : (
        <div>
            <h2>{tiquet.id_tiquetMix}</h2>
            <p>Créé le: {new Date(tiquet.createdAt).toLocaleDateString()}</p>
            <p>Mis à jour le: {new Date(tiquet.updatedAt).toLocaleDateString()}</p>
            <p>Source: <a href={tiquet.source}>Lien</a></p>
            <button onClick={deleteTiquetMix} className='cancelButton'>Supprimer</button>
        </div>
      )
    );
};

export default TiquetComponentAdmin;