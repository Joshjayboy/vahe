import React, {useEffect, useState} from "react";
import Test from ".././../Screens/Test";
import Cart from "../Cart";
import {CartContext} from "./../CartContext";
import Logout from "../Logout";

function Home() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItemsFromStorage = localStorage.getItem("cartItems");
        if (cartItemsFromStorage) {
            setCartItems(JSON.parse(cartItemsFromStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (foods) => {
        setCartItems((prevItems) => [...prevItems, foods]);
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            <Logout/>
            <div>
                <h1>Welcome to the Shopping Page</h1>
                <Test addToCart={addToCart}/>
                <Cart cartItems={cartItems}/>
            </div>
        </CartContext.Provider>
    );
}

export default Home;
