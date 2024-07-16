import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VehicleForm.css';
import * as yup from 'yup';

// Schéma de validation
const schema = yup.object().shape({
    brand: yup.string().required('Vehicle brand is required'),
    model: yup.string().required('Vehicle model is required'),
    motorisation: yup.string(),
    technology: yup.string().required('Vehicle technology is required'),
    type: yup.string().required('Vehicle type is required'),
    consumption: yup.number().required('Vehicle consumption is required'),
    buildImpact: yup.number().required('Vehicle build impact is required'),
    recycleImpact: yup.number().required('Vehicle recycle impact is required'),
    dutyCycle: yup.number().required('Vehicle duty cycle is required'),
    useImpact: yup.number().required('Vehicle use impact is required'),
    enginePower: yup.number().required('Vehicle engine power is required'),
    id_vehicule: yup.number().required('Vehicle id is required'),
    source: yup.string().required('Your information must be sourced ')
});

function VehicleForm({ vehicle, onVehicleSelect }) {
    const [form, setForm] = useState({
        brand: '',
        model: '',
        motorisation: '',
        technology: '',
        type: '',
        consumption: 0,
        buildImpact: 0,
        recycleImpact: 0,
        dutyCycle: 0,
        useImpact: 0,
        enginePower: 0,
        id_vehicule: 0,
        source: '',
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        if (vehicle) {
            console.log(vehicle);
            setForm({
                brand: vehicle.brand,
                model: vehicle.model,
                motorisation: vehicle.motorisation,
                technology: vehicle.technology,
                type: vehicle.type,
                consumption: vehicle.consumption,
                buildImpact: vehicle.buildImpact,
                recycleImpact: vehicle.recycleImpact,
                dutyCycle: vehicle.dutyCycle,
                useImpact: vehicle.useImpact,
                enginePower: vehicle.enginePower,
                id_vehicule: vehicle.id_Vehicules, // Assurez-vous que c'est bien défini
            });
        }
    }, [vehicle]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: name === 'consumption' || name === 'buildImpact' || name === 'recycleImpact' || name === 'dutyCycle' || name === 'useImpact' || name === 'enginePower' ? parseFloat(value) : value // Assurez-vous de convertir les nombres
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setErrors({});
    
        try {
            console.log("test");
            await schema.validate(form, { abortEarly: false });
            console.log(form); // Ajoutez cette ligne pour vérifier les données
            fetch('http://localhost:8000/tiquetsVehicules', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                navigate('/login');
            })
            .catch(error => {
                console.error('Erreur lors de la modification du ticket:', error);
                setErrors({ submit: 'Erreur lors de l\'envoi du formulaire' });
            });
        } catch (err) {
            const validationErrors = {};
            err.inner.forEach(error => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
        }
    };

    const handleConvert = (technology, value) => {
        switch (technology) {
            case 'gasoline':
                setForm({
                    ...form,
                    consumption: parseFloat(value) * 8.9
                });
                break;
            case 'diesel':
                setForm({
                    ...form,
                    consumption: parseFloat(value) * 10.2
                });
                break;
            case 'hybrid':
                setForm({
                    ...form,
                    consumption: parseFloat(value) * 8.9
                });
                break;
            case 'hybrid-diesel':
                setForm({
                    ...form,
                    consumption: parseFloat(value) * 10.74
                });
                break;
            case 'bioethanol':
                setForm({
                    ...form,
                    consumption: parseFloat(value) * 6.7
                });
                break;
            default:
                break;
        }
    };

    const siUnit = true

    return (
        <div id="vehicleFormSection" className="lightBorder">
            {vehicle && (
                <div id="vehicleSelecterFormElem" className="classicFont">
                    <form onSubmit={handleSubmit} className="vehiculeFormElem">
                        <div id="formLine">
                            <label>
                                <p>brand</p>
                                <input type="text" className="copperBorder" name="brand" value={form.brand} onChange={handleChange} />
                            </label>
                            <label>
                                <p>model</p>
                                <input type="text" className="copperBorder" name="model" value={form.model} onChange={handleChange} />
                            </label>
                            <label>
                                <p>motorisation</p>
                                <input type="text" className="copperBorder" name="motorisation" value={form.motorisation} onChange={handleChange} />
                            </label>
                            <label>
                                <p>type</p>
                                <input type="text" className="copperBorder" name="type" value={form.type} onChange={handleChange} />
                            </label>
                        </div>
                        <div id="formLine">
                            <label>
                                <p>dutyCycle (Km)</p>
                                <input type="number" className="copperBorder" name="dutyCycle" value={form.dutyCycle} onChange={handleChange} />
                            </label>
                            <label>
                                <p>buildImpact (Tonns of co2)</p>
                                <input type="float" className="copperBorder" name="buildImpact" value={form.buildImpact} onChange={handleChange} />
                            </label>
                            <label>
                                <p>recycleImpact (Tons of co2)</p>
                                <input type="float" className="copperBorder" name="recycleImpact" value={form.recycleImpact} onChange={handleChange} />
                            </label>
                            <label>
                                <p>useImpact (grams of co2/km)</p>
                                <input type="float" className="copperBorder" name="useImpact" value={form.useImpact} onChange={handleChange} />
                            </label>
                        </div>
                        <div id="formLine">
                            <label>
                                <p>technology</p>
                                <select className="copperBorder" name="technology" value={form.technology} onChange={handleChange}>
                                    <option value="">Select technology</option>
                                    <option value="electric">Electric</option>
                                    <option value="gasoline">Gasoline</option>
                                    <option value="hybrid">Hybrid (Gasoline)</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="hybrid-diesel">Hybrid (Diesel)</option>
                                    <option value="bioethanol">Bioethanol</option>
                                </select>
                            </label>
                            <label>
                            {siUnit && (
                                <label>
                                    <p>consumption (kw/h)</p>
                                    <input type="float" className="copperBorder" name="consumption" value={form.consumption} onChange={handleChange} />
                                </label>
                            )}
                            {!siUnit && (form.technology == 'diesel')(
                                <label>
                                    <p>consumption (l/100km)</p>,
                                    <input type="float" className="copperBorder" name="consumption" value={form.consumption} onChange={handleChange} />
                                </label>
                            )}
                            </label>
                            <label>
                                <p>enginePower (hp)</p>
                                <input type="number" className="copperBorder" name="enginePower" value={form.enginePower} onChange={handleChange} />
                            </label>
                            {(form.technology) != 'electric' &&(
                                <label>
                                    <p>Consuption (l/100km)</p>
                                    <input type="float" className="copperBorder" name="consumptionToConvert" onChange={(e) => handleConvert(form.technology, e.target.value)} />
                                </label>
                            )}
                        </div>
                        <label>
                            <p>source</p>
                            <textarea type="text" className="copperBorder xxlObelixw" name="source" value={form.source} onChange={handleChange} />
                        </label>
                        <label className="invisible">
                            id_vehicule <input type="number" className="copperBorder" name="id_vehicule" value={form.id_vehicule} onChange={handleChange} />
                        </label>
                        <button className="blockButton" type="button" onClick={() => onVehicleSelect(vehicle)}>select</button>      
                        <button type="submit" className="confirmBlockButton">modify</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default VehicleForm;