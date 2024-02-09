/* eslint-disable react/prop-types */

function ProductItem({ item }) {
  return (
    <div className="rounded-xl shadow-md w-[250px] sm:w-full mx-auto sm:mx-0 max-h-[400px]">
      <div className="max-w-[250px] p-2 h-[200px] flex justify-center items-center mx-auto">
        <img
          src={item?.thumbnail}
          alt=""
          className="object-cover h-full object-center rounded-lg"
        />
      </div>
      <div className="px-4 py-2">
        <div className="py-2 flex flex-col">
          <h2 className="text-lg font-medium">{item?.title}</h2>
          <h3 className="text-gray-600 text-sm text-ellipsis line-clamp-1 mb-5">
            {item?.brand}
          </h3>
          <span className="flex justify-between items-center my-1 mr-1">
            <h2 className="text-lg font-medium">${item?.price}</h2>
            <button className="bg-orange-500 px-2 py-1.5 rounded-lg text-white">
              Buy Now
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
