import React from "react";
import ProductList from "../Components/ProductList";
import NavBar from "../Components/NavBar";

function Menu() {
  // test modal

  const renderProducts = () => {
    return (
      <div>
        {/* <Logout/> */}
        <NavBar />
        <ProductList />
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
