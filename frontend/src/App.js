import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import NewProduct from "./components/Products/NewProduct";
import ProductList from "./components/Products/ProductList";
import "./App.css";
import Button from "./components/UI/Button/Button";
import List from "./components/UI/List/List";
import Form from "./components/UI/Form/Form";

// function App() {
//   const [loadedProducts, setLoadedProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:4000/products");

//       const responseData = await response.json();

//       setLoadedProducts(responseData.products);
//       setIsLoading(false);
//     };

//     fetchProducts();
//   }, []);

//   const addProductHandler = async (productName, productPrice) => {
//     try {
//       const newProduct = {
//         title: productName,
//         price: +productPrice, // "+" to convert string to number
//       };
//       let hasError = false;
//       const response = await fetch("http://localhost:4000/product", {
//         method: "POST",
//         body: JSON.stringify(newProduct),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         hasError = true;
//       }

//       const responseData = await response.json();

//       if (hasError) {
//         throw new Error(responseData.message);
//       }

//       setLoadedProducts((prevProducts) => {
//         return prevProducts.concat({
//           ...newProduct,
//           id: responseData.product.id,
//         });
//       });
//     } catch (error) {
//       alert(error.message || "Something went wrong!");
//     }
//   };

//   return (
//     <React.Fragment>
//       <Header />
//       <main>
//         <NewProduct onAddProduct={addProductHandler} />
//         {isLoading && <p className="loader">Loading...</p>}
//         {!isLoading && <ProductList items={loadedProducts} />}
//       </main>
//     </React.Fragment>
//   );

// }

function App() {
  const [items, setItems] = useState([]);

  const addToListHandler = (item) => {
    if (item) {
      const newItem = { id: Math.random().toString(), label: item };
      setItems((prevItems) => prevItems.concat(newItem));
    }
  };

  return (
    <React.Fragment>
      <Form addToListHandler={addToListHandler}></Form>
      <List items={items} />
    </React.Fragment>
  );
}
export default App;
