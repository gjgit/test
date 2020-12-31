import React from "react";
import { useParams } from "react-router-dom";

const SpamData = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div>
        <h3>{product.subject}</h3>
        <p dangerouslySetInnerHTML={{ __html: product.content }}></p>
      </div>
    );
  } else {
    productData = <h2>Sorry. SpamData doesn't exist</h2>;
  }

  return <div>{productData}</div>;
};

export default SpamData;
