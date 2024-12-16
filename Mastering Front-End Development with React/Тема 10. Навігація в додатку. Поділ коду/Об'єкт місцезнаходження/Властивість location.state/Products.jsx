// src/pages/Products.jsx

const Products = () => {
  const location = useLocation();

  return (
    <Link to="/product/h-1" state={location}>
      Navigate to product h-1
    </Link>
  );
};
