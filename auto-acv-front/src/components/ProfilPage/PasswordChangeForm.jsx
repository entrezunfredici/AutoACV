import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {jwtDecode} from 'jwt-decode';

import './ProfilPage.css';

const schema = yup.object().shape({
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
});

function PasswordChangeForm() {

  const decodedToken = jwtDecode(localStorage.getItem('token'));

  const [form, setForm] = useState({ 
    password: '',
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
        fetch('http://89.116.110.208:9000/users/password/'+id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la modification du mot de passe in the response');
            }
            return response.json();
        })
        .then(data => {
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
      <h1>Changer son mot de passe</h1>
      <form onSubmit={handleSubmit}>
        <label>
            Nouveau mot de passe :&nbsp;
            <input type="password" name="password" value={form.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
        </label>
        <a></a>
        <button type="submit">Modifier</button>
    </form>
    </div>
  );
}

export default PasswordChangeForm;