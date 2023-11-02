import React from "react";

const Home = () => {
  return (
    <div>
      <br />
      <br />
      <main className="container mx-auto p-8 rounded-lg shadow-lg transition-transform transform scale-100 hover:scale-105">
        {" "}
        <section className="bg-white p-8 rounded-lg ">
          {" "}
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome to Our Online Store{" "}
          </h2>{" "}
          <p className="text-lg text-gray-600 mt-4">
            Discover the latest products and deals.{" "}
          </p>{" "}
          <a
            href="/products"
            className="bg-blue-600 text-white text-xl font-semibold mt-6 px-6 py-3 rounded-lg inline-block hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            Shop Now
          </a>
        </section>
      </main>
      <br />
      <br />
      <div className=" bg-gray-900  rounded-lg shadow-lg transition-transform transform scale-100 hover:scale-105">
        <div className="container mx-auto p-10">
          <h3 className="text-white text-3xl font-bold mb-5">Follow us</h3>
          <br />
          <div>
            <a
              href=""
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Facebook
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              href=""
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <br /> <br />
      <footer className="text-center py-4 text-gray-600">
        <p>&copy; 2023 E-Commerce Store by Harris Nadeem</p>{" "}
      </footer>
    </div>
  );
};

export default Home;
