import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';

const Search = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/restaurantes')
            .then(res => res.json())
            .then(data => {
                setRestaurants(data);
                setFilteredRestaurants(data);
            });
    }, []);

    const handleSearch = (searchTerm) => {
        const results = restaurants.filter(r =>
            r.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRestaurants(results);
    };

    return (
        <div>
            <h1>Buscar Restaurantes</h1>
            <SearchBar onSearch={handleSearch} />
            <RestaurantList restaurants={filteredRestaurants} />
        </div>
    );
};

export default Search;