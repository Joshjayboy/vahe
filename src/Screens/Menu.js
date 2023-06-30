import React from 'react';
import ProductList from "../Components/ProductList";
import Logout from "../Components/Logout";

function Menu() {
    // test modal

    const renderProducts = () => {
        return (<div>
                <Logout/>
                <ProductList/>
            </div>


        );
    };

    return (
        <div>
            {/* Render the products */}
            {renderProducts()}
        </div>
    );
}

export default Menu;
