// TiquetComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TiquetComponent = ({ tiquet, onDelete}) => {
    const navigate = useNavigate();
    const deleteTiquet = () => {
        fetch(`http://89.116.110.208:9000/tiquetsVehicules/${tiquet.id_tiquetVehicules}`, {
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
    return (
        <div>
            <h2>{tiquet.brand} {tiquet.model}</h2>
            <p>Créé le: {new Date(tiquet.createdAt).toLocaleDateString()}</p>
            <p>Mis à jour le: {new Date(tiquet.updatedAt).toLocaleDateString()}</p>
            <p>Source: <a href={tiquet.source}>Lien</a></p>
            <button onClick={deleteTiquet} className='cancelButton'>Supprimer</button>
        </div>
    );
};

export default TiquetComponent;