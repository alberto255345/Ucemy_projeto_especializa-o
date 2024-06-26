import React from 'react';
import { useParams } from 'react-router-dom';

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
        <h1>Product Details for {id}</h1>
        </div>
    );
};

export default Product;