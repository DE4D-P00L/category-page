import { useState, useEffect } from "react";
import Category from "../components/Category";
import axios from "axios";
import ProductItem from "../components/ProductItem";

function Store() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [tempProducts, setTempProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [price, setPrice] = useState(3000);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        let query = "https://dummyjson.com/products";
        const data = await axios.get(query);
        setProducts(data.data.products);
        setTempProducts(data.data.products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleCategoryChange = (val) => {
    (async () => {
      try {
        setIsLoading(true);
        setProducts("");
        let query;
        if (val === "") {
          query = "https://dummyjson.com/products";
        } else {
          query = "https://dummyjson.com/products/category/" + val;
        }
        const data = await axios.get(query);
        setProducts(data.data.products);
        setTempProducts(data.data.products);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    })();
  };

  const handlePriceChange = (val) => {
    const filteredProducts = tempProducts.filter(
      (product) => product.price <= Number(val)
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="p-5 max-w-7xl mx-auto pt-20">
      <h1 className="text-4xl font-bold my-4">New Arrivals</h1>
      <p className="text-md text-gray-500">
        Checkout out the latest release of Basic Tees, new and improved with
        four openings!
      </p>
      <div className="h-[1px] w-full bg-gray-300 my-7"></div>
      <div className="flex-col flex sm:flex-row gap-5 py-3 ">
        {/*Category */}
        <Category
          onChange={handleCategoryChange}
          filter={filter}
          setFilter={setFilter}
          price={price}
          setPrice={setPrice}
          onPriceChange={handlePriceChange}
        />
        {/* Grid */}
        {isLoading && (
          <div className="w-full text-center my-[100px]">Loading...</div>
        )}
        {!isLoading && products.length >= 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {products &&
              products?.map((product) => (
                <ProductItem key={product.id} item={product} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Store;
