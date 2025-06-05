import React from 'react';

const RestaurantCard = ({name, address, description, image }) => {
    return (
        <div className="restaurant-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{description}</p>
        </div>
    );
};

export default RestaurantCard;