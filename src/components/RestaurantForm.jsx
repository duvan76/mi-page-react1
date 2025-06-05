import React, { useState } from 'react';

const RestaurantForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('restaurant-name', name);
        formData.append('restaurant-description', description);
        formData.append('restaurant-address', address);
        formData.append('restaurant-image', image);

        fetch('/save-restaurant', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('¡Restaurante guardado exitosamente!');
                setName('');
                setDescription('');
                setAddress('');
                setImage(null);
            } else {
                alert('No se pudo guardar el restaurante.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al guardar el restaurante.');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="restaurant-name">Nombre:</label>
            <input 
                type="text" 
                id="restaurant-name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />

            <label htmlFor="restaurant-description">Descripción:</label>
            <input 
                type="text" 
                id="restaurant-description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
            />

            <label htmlFor="restaurant-address">Dirección:</label>
            <input 
                type="text" 
                id="restaurant-address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
            />

            <label htmlFor="restaurant-image">Imagen:</label>
            <input 
                type="file" 
                id="restaurant-image" 
                onChange={(e) => setImage(e.target.files[0])} 
                accept="image/*" 
                required 
            />

            <button type="submit">Guardar Restaurante</button>
        </form>
    );
};

export default RestaurantForm;