import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartCheckout/CartAction";

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState();
  const [productCounter, setProductCounter] = useState(1);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const dataResponse = await axios.get(
        `https://fakestoreapi.com/products/${productID}`
      );
      setProduct(dataResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const cartHandler = () => {
    console.log(productCounter);
    console.log(product);
    const cart = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: productCounter,
    };

    dispatch(addToCart(cart));

    console.log(cart);
    alert("Item added to Cart");
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-300">
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 p-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-full"
                src={product && product.image}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-2">
              {product && product.title}
            </h2>
            <p className="text-gray-500 mb-4">{product && product.category}</p>
            <p className="text-lg text-gray-700 mb-6">
              {product && product.description}
            </p>
            <h1 className="text-2xl font-semibold">
              Price: ${product && product.price}
            </h1>
            <div className="mt-6 flex items-center space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 border border-black"
                onClick={() => setProductCounter(productCounter + 1)}
              >
                +
              </button>
              <p className="text-2xl font-semibold" id="pcount">
                {productCounter}
              </p>
              <button
                className="px-4 py-2 bg-gray-200 border border-black"
                onClick={() =>
                  setProductCounter(
                    productCounter > 1 ? productCounter - 1 : productCounter
                  )
                }
              >
                -
              </button>
            </div>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="px-6 py-3 bg-blue-500 text-white font-semibold mr-4"
              >
                Buy Now
              </Link>
              {/* <Link
                to="/cart"
                className="px-6 py-3 bg-gray-200 border border-black font-semibold"
              >
                Add to Cart
              </Link> */}
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-3 rounded"
                onClick={cartHandler}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
