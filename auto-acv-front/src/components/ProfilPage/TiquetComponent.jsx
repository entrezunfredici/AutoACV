// TiquetComponent.jsx
import React from 'react';

const TiquetComponent = ({ tiquet }) => {
    const deleteTiquet = () => {
        fetch(`http://localhost:8000/tiquetsVehicules/${tiquet.id_tiquetVehicules}`, {
        method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
        // Gérer la réponse ici
        console.log(data);
        })
        .catch((error) => {
        // Gérer l'erreur ici
        console.error('Error:', error);
        });
    };
    return (
        console.log(tiquet),
        <div>
        <h2>{tiquet.brand} {tiquet.model}</h2>
        <p>Créé le: {new Date(tiquet.createdAt).toLocaleDateString()}</p>
        <p>Mis à jour le: {new Date(tiquet.updatedAt).toLocaleDateString()}</p>
        <p>Source: <a href={tiquet.source}>Lien</a></p>
        <button onClick={deleteTiquet}>Supprimer</button>
        </div>
    );
};

export default TiquetComponent;