import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="bg-gray-100 border rounded-lg shadow-lg transition-transform transform scale-100 hover:scale-105 flex flex-col">
      <Link
        to={`/product-details/${props.id}`}
        className="block w-full h-48 overflow-hidden rounded-t-lg"
      >
        <img
          className="object-cover w-full h-full"
          src={props.image}
          alt={props.title}
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
          <p className="text-gray-600 text-sm mb-2">{props.category}</p>
        </div>
        <div className="text-center text-blue-600 font-semibold text-lg my-2">
          Price: ${props.price}
        </div>
        <div>
          <Link
            to={`/product-details/${props.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded"
          >
            View Details
          </Link>
          &nbsp; &nbsp;
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
