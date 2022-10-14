import { useParams } from "react-router-dom";


const ProductDetail = ({ product }) => {
    const params = useParams();

  return (
    <div className="container">
        <h1>{params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
