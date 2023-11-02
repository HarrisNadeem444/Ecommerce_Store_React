import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("alphabetical"); // Default sorting by alphabetical order
  const [minPrice, setMinPrice] = useState(""); // Minimum price filter
  const [maxPrice, setMaxPrice] = useState(""); // Maximum price filter

  useEffect(() => {
    getData();
  }, [sortOption, minPrice, maxPrice]);

  const getData = async () => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      let filteredProducts = [...resp.data]; // Create a copy of the data array

      // Filter products based on the selected price range
      if (minPrice !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= parseFloat(minPrice)
        );
      }

      if (maxPrice !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= parseFloat(maxPrice)
        );
      }

      // Sort products based on the selected sorting option
      if (sortOption === "ascendingPrice") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "descendingPrice") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      } else {
        // Default: Sort alphabetically by title
        filteredProducts = filteredProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }

      setProducts(filteredProducts);
    } catch (e) {
      console.log("Error Fetching Data");
    }
  };

  return (
    <>
      <br />
      <br />
      <div>
        <div className="mb-6">
          <input
            placeholder="Search Product.."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            id="default-input"
            className="border border-gray-700 rounded p-1.5 bg-gray-700 text-white"
          />
        </div>
        <div>
          <p className="font-bold">Sort by:</p>
          <select
            className="border border-gray-700 rounded p-1"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
            }}
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="ascendingPrice">Price: Low to High</option>
            <option value="descendingPrice">Price: High to Low</option>
          </select>
        </div>
        <br />

        <div className="flex">
          <p className="font-bold">Price Range:</p>
          &nbsp; &nbsp; &nbsp;
          <input
            className="border border-gray-700 rounded p-1"
            type="number"
            placeholder="Enter Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />{" "}
          &nbsp;
          <input
            className="border border-gray-700 rounded p-1"
            type="number"
            placeholder="Enter Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <hr />
          <br />
        </div>
        <br />
        {/* <h1>&lt; All Products &gt;</h1> */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
          {products
            .filter((res) => {
              if (search === "") {
                return res;
              } else if (
                res.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return res;
              }
            })
            .map((res) => (
              <ProductCard
                key={res.id}
                title={res.title}
                image={res.image}
                category={res.category}
                price={res.price}
                id={res.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
