import React, { useState } from 'react';
import './form.css';

/**
 * Represents a sign-in form component.
 * 
 * If the is an error during the sign-in process, an error message is displayed
 * else the user is redirected to the home page.(TODO: redirect to the home page)
 * 
 * @returns {JSX.Element} The sign-in form component.
 */
function SignInForm() {
  const [form, setForm] = useState({ 
    username: '',
    password: '',
    });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');

    try {
        fetch('http://localhost:8000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la connexion de l\'utilisateur');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('token', data.token);
            /*TODO: redirect to the home page*/
        })
        .catch(error => {
            setErrorMessage(error.message);
        });
    } catch (error) {
        setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Username :&nbsp;
            <input type="text" name="username" value={form.username} onChange={handleChange} />
        </label>
        <label>
            Mot de passe :&nbsp;
            <input type="password" name="password" value={form.password} onChange={handleChange} />
        </label>
        <button type="submit">Se connecter</button>
        {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default SignInForm;