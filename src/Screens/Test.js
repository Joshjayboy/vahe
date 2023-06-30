// import React, { useContext, useEffect, useState } from "react";
// // import { CartContext } from "./CartContext";
//
// import { useNavigate } from "react-router-dom";
// // import { useCartContext } from "../Components/CartContext";
// // import addToCart from "../Components/CartContext";
// import noodles from "../Data/noodles.json";
//
// import rice from "../Data/rice.json";
// import apertizer from "../Data/apertizer.json";
// import bao from "../Data/bao.json";
// import signature from "../Data/signature.json";
// import soups from "../Data/soups.json";
// import salads from "../Data/salads.json";
// import extra from "../Data/extra.json";
// import dessert from "../Data/dessert.json";
// import soft from "../Data/soft.json";
// import Details from "./../Components/Modal";
// import Search from "../Components/Search";
//
// function Menu({ addToCart }) {
//   const [search, setSearch] = useState("");
//   // test modal
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const handleClick = (foods) => {
//     setSelectedProduct(foods);
//   };
//
//   const navigate = useNavigate();
//   //  const { addToCart } = useCartContext();
//
//   const handleAddToCart = () => {
//     // if (selectedProduct) {
//     addToCart(selectedProduct);
//     setSelectedProduct(null);
//     navigate("/home"); // Navigate back to the live shop page
//   };
//   //   };
//
//   const renderProducts = () => {
//     return (
//       <>
//         {/* <Search /> */}
//
//         <div className="align-items-center search">
//           <form onChange={(e) => setSearch(e.target.value)}>
//             <input
//               className="my-3 form-control"
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search In Restaurant"
//             ></input>
//           </form>
//         </div>
//
//         {/* end of search */}
//         <div className="container">
//           <div className="section product1">
//             {/* this row is for noodles */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Noddles</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                           >
//                             {/* worked map */}
//                             <>
//                               {noodles
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div
//                                       className="inside"
//                                       type="button"
//                                       data-toggle="modal"
//                                       onClick={() => handleClick(foods)}
//                                     >
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//                             {/* end of worked map */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of noodles row */}
//
//             {/* this row is for rice */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Rice</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             <>
//                               {rice
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//                             {/* end of rice box */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of rice row */}
//
//             {/* this box is for apetizers */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Appetizers</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             {/* apertizer box */}
//                             <>
//                               {apertizer
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//                             {/* apertizer box end */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of apertizer */}
//
//             {/* this section is for bao */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Bao</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             {/* box for bao */}
//                             <>
//                               {bao
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//                             {/* end of box for bao */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of bao */}
//
//             {/* signature Dishes from Chef */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">
//                               Signature Dishes from Chef
//                             </h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             {/* box for signature dishes from chef */}
//
//                             <>
//                               {signature
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//                             {/* end of box for signature dishes from chef */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of signature Dishes from chefs */}
//
//             {/* Soups */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Soups</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             {/* soups box */}
//                             <>
//                               {soups
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//
//                             {/* end of soups box */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of soup */}
//
//             {/* Salads */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Salads</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             {/* box for salads */}
//
//                             <>
//                               {salads
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//
//                             {/* end of box for salads */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of salads */}
//
//             {/* Extra */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Extra</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             {/* extra box */}
//
//                             <>
//                               {extra
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//                             {/* end of extra box */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of extra */}
//
//             {/* desert */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Dessert</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             {/* dessert box */}
//
//                             <>
//                               {dessert
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//
//                             {/* end of dessert box */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of desert */}
//
//             {/* soft drinks */}
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 col-xl-12 col-12">
//                 <div className="shopcontainer row pro">
//                   <div className="upthree ">
//                     <div className="uptwo">
//                       <div className="upone">
//                         <div className="up">
//                           <div className="shop_name">
//                             <h2 className="rshop_name">Soft drinks</h2>
//                           </div>
//                           <div
//                             className="shop"
//                             type="button"
//                             // className="btn btn-primary"
//                             data-toggle="modal"
//                             data-target="#exampleModal"
//                             // onClick={() => changecontent(foods)}
//                           >
//                             {/* soft drinks */}
//                             <>
//                               {soft
//                                 .filter((foods) => {
//                                   return search.toLowerCase() === ""
//                                     ? foods
//                                     : foods.title
//                                         .toLowerCase()
//                                         .includes(search);
//                                 })
//                                 .map((foods, index) => (
//                                   <div
//                                     className="border-product col-lg-3 col-xs-6 col-sm-6 col-md-5 col-xl-3"
//                                     key={index}
//                                     onClick={() => handleClick(foods)}
//                                   >
//                                     <div className="inside">
//                                       <div className="shopBack">
//                                         <img src={foods.image} />
//
//                                         <span className="love">
//                                           <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 20.483 18.921"
//                                           >
//                                             <path
//                                               d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                                               transform="translate(0.524 0.507)"
//                                               fill="none"
//                                               stroke="#ea1f4d"
//                                               stroke-width="1"
//                                               fill-rule="evenodd"
//                                             ></path>
//                                           </svg>
//                                         </span>
//                                       </div>
//
//                                       <div className="shoptext">
//                                         <div className="divtext text-center">
//                                           <h3 className="food_text">
//                                             {foods.title}
//                                           </h3>
//                                         </div>
//
//                                         <div className="pricart">
//                                           <div className="price">
//                                             <div className="price2">
//                                               <span className="rprice">
//                                                 {foods.price}
//                                               </span>
//                                               <span className="mprice">
//                                                 {foods.amd}
//                                               </span>
//                                             </div>
//                                           </div>
//
//                                           <div className="cart">
//                                             <svg
//                                               xmlns="http://www.w3.org/2000/svg"
//                                               width="24"
//                                               height="24"
//                                               viewBox="0 0 24 24"
//                                             >
//                                               <g transform="translate(-108 -187)">
//                                                 <rect
//                                                   width="24"
//                                                   height="24"
//                                                   transform="translate(108 187)"
//                                                   fill="none"
//                                                 ></rect>
//                                                 <g transform="translate(111.236 190)">
//                                                   <path
//                                                     transform="translate(-150.521 -575.212)"
//                                                     fill="#ea1f4d"
//                                                     d="M156.71,587.519a.325.325,0,0,0,.079-.025,1.084,1.084,0,0,0,.227.026h8.2a1.438,1.438,0,0,0,1.255-.85L168.7,581.1a.77.77,0,0,0-.747-1.1h-2.735a.342.342,0,1,0,0,.684h2.735a.1.1,0,0,1,.112.166l-2.227,5.568a.755.755,0,0,1-.62.42h-8.2a.587.587,0,0,1-.518-.4l-1.378-5.511a.171.171,0,0,1,.186-.239h3.077a.342.342,0,1,0,0-.684h-3.077a.85.85,0,0,0-.85,1.088l1.378,5.511a1.16,1.16,0,0,0,.245.463,1.967,1.967,0,0,0-.753,1.03,1.087,1.087,0,0,0,.131.973,1.381,1.381,0,0,0,1.217.508h9.914a.342.342,0,1,0,0-.684h-9.914a.824.824,0,0,1-.658-.22.41.41,0,0,1-.045-.35C156.226,587.6,156.679,587.524,156.71,587.519Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-143 -565.996)"
//                                                     fill="#ea1f4d"
//                                                     d="M147.173,569.787l-.68-2.25a1.79,1.79,0,0,0-1.7-1.54h-1.453a.342.342,0,1,0,0,.684h1.47c.075,0,.76,0,1.023,1.039l.684,2.265a.342.342,0,0,0,.655-.2Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-151.556 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M157.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,157.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,157.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-167.351 -594.956)"
//                                                     fill="#ea1f4d"
//                                                     d="M181.709,610a1.709,1.709,0,1,0,1.709,1.709A1.711,1.711,0,0,0,181.709,610Zm0,2.735a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,181.709,612.735Z"
//                                                   ></path>
//                                                   <path
//                                                     transform="translate(-160.111 -569.289)"
//                                                     fill="#ea1f4d"
//                                                     d="M171.174,578.442a.343.343,0,0,0,.438,0l2.051-1.709a.342.342,0,0,0-.438-.526l-1.491,1.242v-6.108a.342.342,0,0,0-.684,0v6.108l-1.491-1.242a.342.342,0,0,0-.438.526Z"
//                                                   ></path>
//                                                 </g>
//                                               </g>
//                                             </svg>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                             </>
//                             {/* end of soft drinks */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end of soft drinks */}
//           </div>
//         </div>
//       </>
//     );
//   };
//
//   const renderModal = () => {
//     if (selectedProduct) {
//       return (
//         <div
//           className="modal fade"
//           id="exampleModal"
//           tabIndex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div
//             className="modal-dialog modal-dialog-centered middleModal "
//             role="document"
//           >
//             <div className="modal-content middleContent">
//               <div className="modal-header modalHead">
//                 <button className="mclose">
//                   <span className="mspan">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="#e3e3e3"
//                         d="M18.3,5.71a1,1,0,0,0-1.41,0L12,10.59,7.11,5.7A1,1,0,0,0,5.7,7.11L10.59,12,5.7,16.89A1,1,0,0,0,7.11,18.3L12,13.41l4.89,4.89a1,1,0,0,0,1.41-1.41L13.41,12,18.3,7.11A1,1,0,0,0,18.3,5.71Z"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="span2"></span>
//                 </button>
//               </div>
//
//               <div className="modal-body mmiddle">
//                 <div className="mmiddle2">
//                   <div className="mmiddle3">
//                     <img
//                       src={selectedProduct.image}
//                       alt="selected image"
//                       className="mmiddle3"
//                     />
//                     <span>
//                       <span className="mlove">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 20.483 18.921"
//                         >
//                           <path
//                             d="M9.717,17.815c18.469-12.169,6.023-22.376,0-15.7C3.695-4.561-8.752,5.645,9.717,17.815Z"
//                             transform="translate(0.524 0.507)"
//                             fill="none"
//                             stroke="#ea1f4d"
//                             stroke-width="1"
//                             fill-rule="evenodd"
//                           ></path>
//                         </svg>
//                       </span>
//                     </span>
//                   </div>
//
//                   <div className="mword">
//                     <a className="amword2" href="www.google.com">
//                       <picture>
//                         <img
//                           src="https://menu.am/resources/default/img/restaurants/big/1676525821737-2653.jpg"
//                           alt="this is it"
//                           className="inimage"
//                         />
//                       </picture>
//
//                       <span className="mchina">Made in China</span>
//                     </a>
//
//                     <div className="mtitle">{selectedProduct.title}</div>
//
//                     <div className="mprice">
//                       <div className="mrprice">
//                         <span className="mrprice2">
//                           {selectedProduct.price}
//                         </span>
//
//                         <span className="mrprice3">AMD</span>
//                       </div>
//
//                       <div className="mcount">
//                         <button className="mminus">-</button>
//                         <div className="mnumber">
//                           {/* <input
//                              type="text"
//                             maxLength="3"
//                             className="mnumber2"
//                             value="1"
//                             defaultValue="1"
//                           /> */}
//                         </div>
//                         <button className="mplus">+</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//
//                 <div className="modal-body midword">
//                   This is how it works here This is how it works here This is
//                   how
//                 </div>
//
//                 <div className="mcomment modal-body">
//                   <div className="mcomment2">
//                     <div className="mcomment3">
//                       <textarea
//                         className="mtextarea"
//                         placeholder="Your comments to the order"
//                       ></textarea>
//
//                       <textarea className="mtextarea2"></textarea>
//                     </div>
//                     <p className="mval">Up-to 200 symbols / 0</p>
//                   </div>
//                 </div>
//               </div>
//
//               <div className="modal-footer mfoot">
//                 <div className="mfoot2">
//                   <button
//                     className="mfoot3"
//                     type="button"
//                     onClick={handleAddToCart}
//                   >
//                     Add to Cart
//                     {/* <span className="mcart">Add to Cart</span> */}
//                     <span className="mcart1"></span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   };
//   // end of test modal
//
//   return (
//     <div>
//       {renderProducts()}
//       {renderModal()}
//     </div>
//   );
// }
//
// export default Menu;
