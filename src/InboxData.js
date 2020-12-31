import React from "react";
import { useParams } from "react-router-dom";

const InboxData = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div>
        <h3>{product.subject}</h3>
        <p dangerouslySetInnerHTML={{ __html: product.content }}></p>
        <hr />
        <h4>{product.unread}</h4>
      </div>
    );
  } else {
    productData = <h2>Sorry. InboxData doesn't exist</h2>;
  }

  return <div>{productData}</div>;
};

export default InboxData;
