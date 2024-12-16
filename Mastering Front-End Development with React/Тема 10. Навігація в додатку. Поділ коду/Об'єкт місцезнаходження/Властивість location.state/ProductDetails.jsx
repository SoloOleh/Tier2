// // src/pages/ProductDetails.jsx

// const ProductDetails = () => {
//   const location = useLocation();
//   console.log(location.state);

//   // /products -> products/h-1
//   // { pathname: "/products", search: "" }

//   // /products?name=hoodie -> products/h-1
//   // { pathname: "/products", search: "?name=hoodie" }

//   return <Link to={location.state}>Back to products</Link>;
// };

// src/pages/ProductDetails.jsx

const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state ?? "/products";

  return <Link to={backLinkHref}>Back to products</Link>;
};
