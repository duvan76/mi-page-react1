import React, { useEffect, useState } from 'react';
import RestaurantList from '../components/RestaurantList';

function Home() {
    const [restaurantesLocales, setRestaurantesLocales] = useState([]);
    const [restaurantesDB, setRestaurantesDB] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/restaurantes')
            .then(res => res.json())
            .then(data => setRestaurantesDB(data));
    }, []);

    const todosLosRestaurantes = [...restaurantesLocales, ...restaurantesDB];

    return (
        <div>
            <h2 className='Title'>BUSCADOR DE RESTAURANTES</h2>
            <RestaurantList restaurants={todosLosRestaurantes} />
        </div>
    );
}

export default Home;