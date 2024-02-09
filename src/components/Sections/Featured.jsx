import macImg from "../../assets/monitor.png";

function Featured() {
  const arr = [1, 2, 3];
  return (
    <section className="flex flex-col max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-5 mt-5">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {arr.map((elem) => (
          <div
            className="border-[1px] border-gray-300 rounded-sm p-4"
            key={elem}>
            <img src={macImg} alt="" width={150} className="mx-auto" />
            <h3 className="text-xl font-semibold">Monitor</h3>
            <p className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet consectetur quaerat.
            </p>
            <span className="text-primary">$999</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;
