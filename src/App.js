import React from "react";
import {Route, Routes} from "react-router-dom";
// import "./App.css";
import "./new.css";
import "./responsive.css";
import Login from "./Screens/Login";
import Menu from "./Screens/Menu";
import PrivateRoute from "./Components/PrivateRoute";
import CreateProduct from "./Components/CreateProduct";
import SignUp from "./Components/SignUp";
import CustomerList from "./Components/CustomerList";
import AdminProductList from "./Components/AdminProductList";
import ForgetPassword from "./Components/ChangePassword/ForgetPassword";

function App() {
    const privateRoute = (Component) => (
        <PrivateRoute>
            <Component/>
        </PrivateRoute>
    );

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/forget-password" element={<ForgetPassword/>}/>
                <Route path="/" element={privateRoute(Menu)}/>
                <Route path="/customers" element={privateRoute(CustomerList)}/>
                <Route
                    path="/admin/add-product"
                    element={privateRoute(CreateProduct)}
                />
                <Route
                    path="/admin/products"
                    element={privateRoute(AdminProductList)}
                />
                <Route path="/test" element={<CreateProduct/>}/>
            </Routes>
        </>
    );
}

export default App;
