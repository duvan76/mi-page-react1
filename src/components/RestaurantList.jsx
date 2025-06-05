import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants }) => {
    return (
        <div className="restaurants">
            {restaurants.length > 0 ? (
                restaurants.map((restaurant) => (
                    <div key={restaurant.id}>
                        <RestaurantCard 
                            name={restaurant.nombre}
                            address={restaurant.direccion}
                            description={restaurant.descripcion}
                            image={restaurant.imagen}
                        />
                    </div>
                ))
            ) : (
                <p>No se encontraron restaurantes.</p>
            )}
        </div>
    );
};

export default RestaurantList;