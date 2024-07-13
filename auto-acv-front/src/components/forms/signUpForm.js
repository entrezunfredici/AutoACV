import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import './form.css';
//Ici le schéma de validation de notre formulaire
const schema = yup.object().shape({
    username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
    mail: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
});

function SignUpForm() {
    const[form, setForm] = useState({
        username: '',
        password: '',
        mail: '',
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});

        try {
            await schema.validate(form, {abortEarly: false});
            fetch('http://localhost:8000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })
            .then(response => response.json())
            .then(data => {
                navigate('/login');
            })
            .catch(error => {
                console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
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
        <div className="form">
            <h1>Inscription</h1>
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
                <label>
                    Password :&nbsp;
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;