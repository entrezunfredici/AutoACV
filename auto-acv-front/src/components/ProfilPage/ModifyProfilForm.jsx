import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {jwtDecode} from 'jwt-decode';

import './ProfilPage.css';

const schema = yup.object().shape({
    username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
    mail: yup.string().required('Email is required').email('Email is not valid'),
});

function ModifyProfilForm() {

  const decodedToken = jwtDecode(localStorage.getItem('token'));

  const [form, setForm] = useState({ 
    username: '',
    mail: '',
    admin: decodedToken.data.admin
    });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate('/profil');

  const id = decodedToken.data.id_Users;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors('');

    try {
        await schema.validate(form, {abortEarly: false});
        fetch('http://localhost:8000/users/'+id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la modification de l\'utilisateur in the response');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('token', data.user);
            navigate('/profil');
        })
        .catch(error => {
            console.error('Erreur lors de la modification de l\'utilisateur in the catch', error);
        });
    } catch (err) {
        const validationErrors = {}
        err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h1>Profil Utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <label>
            Username :&nbsp;
            <input type="text" name="username" value={form.username} onChange={handleChange} />
            {errors.username && <p>{errors.username}</p>}
        </label>
        <label>
            Mail :&nbsp;
            <input type="text" name="mail" value={form.mail} onChange={handleChange} />
            {errors.mail && <p>{errors.mail}</p>}
        </label>
        <a></a>
        <button type="submit">Modifier</button>
    </form>
    </div>
  );
}

export default ModifyProfilForm;