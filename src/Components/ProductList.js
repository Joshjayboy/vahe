import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem';
import {BACKEND_BASE_URL} from "../Constants/AppConstants";

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${BACKEND_BASE_URL}/products`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                    Cookie: 'JSESSIONID=CA5696E69CC8087799286FBD15245034'
                }
            });
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            {products.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default ProductsList;
