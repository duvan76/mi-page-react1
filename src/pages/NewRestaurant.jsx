import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewRestaurant = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        let imageName = image ? image.name : '';
        
        

        try {
            const response = await fetch('http://localhost:4000/api/restaurantes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nombre: name,
                    direccion: address,
                    descripcion: description,
                    imagen: image
                })
            });

            if (response.ok) {
                alert('¡Restaurante guardado exitosamente!');
                history.push('/'); // Redirect to home page
            } else {
                alert('No se pudo guardar el restaurante.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al guardar el restaurante.');
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="restaurant-name">Nombre:</label>
                <input
                    type="text"
                    id="restaurant-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="restaurant-address">Direccion:</label>
                <input
                    type="text"
                    id="restaurant-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />

                <label htmlFor="restaurant-description">Descripcion:</label>
                <input
                    type="text"
                    id="restaurant-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <label htmlFor="restaurant-image">Imagen:</label>
                <input
                    type='url'
                    id="restaurant-image"
                    value={image}
                    placeholder="URL de la imagen"
                    onChange={(e) => setImage(e.target.value)}
                    required
                />

                <button type="submit">Guardar Restaurante</button>
            </form>
        </div>
    );
};

export default NewRestaurant;