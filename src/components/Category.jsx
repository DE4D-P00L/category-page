/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

function Category({
  onChange,
  filter,
  setFilter,
  price,
  setPrice,
  onPriceChange,
}) {
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategory(data.data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="">
        <h2
          className="mb-2 text-lg flex justify-between items-center min-w-[200px] cursor-pointer select-none"
          onClick={() => {
            setShowCategory((state) => !state);
          }}>
          <span>Categories</span>
          <span className="text-xl">{showCategory ? "-" : "+"}</span>
        </h2>
        <div
          className={`flex flex-col gap-0.5 ${
            showCategory ? "block" : "hidden"
          }`}>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="all"
              name="category"
              value={""}
              checked={filter === ""}
              onChange={(e) => {
                onChange(e.target.value);
                setFilter(e.target.value);
              }}
            />
            <label htmlFor="all" className="text-md">
              All
            </label>
          </div>
          {category &&
            category.map((c) => (
              <div className="flex items-center gap-2" key={c}>
                <input
                  type="radio"
                  id={c}
                  name="category"
                  value={c}
                  checked={filter === c}
                  onChange={(e) => {
                    onChange(e.target.value);
                    setFilter(e.target.value);
                  }}
                />
                <label htmlFor={c} className="text-md capitalize">
                  {c}
                </label>
              </div>
            ))}
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-300 my-3"></div>
      <div>
        <h2 className="mb-2 text-lg flex flex-col justify-between min-w-[175px] cursor-pointer select-none gap-2">
          <span>Price: 50-{price}</span>
          <input
            type="range"
            name="price"
            id="price"
            min={50}
            max={3000}
            step={50}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              onPriceChange(e.target.value);
            }}
          />
        </h2>
      </div>
      <div className="h-[1px] w-full bg-gray-300 my-3"></div>
    </div>
  );
}

export default Category;
