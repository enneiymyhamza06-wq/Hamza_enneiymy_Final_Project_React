import { useState } from "react";
import { products } from "../constants/data";

function Products() {

  const [start, setStart] = useState(0);
  const perPage = 6;

  const visibleProducts = products.slice(start, start + perPage);

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 p-2">
    {visibleProducts.map((item) => (
        <div key={item.id} className="cursor-pointer">     
        <div className="w-full h-130 bg-gray-800 rounded overflow-hidden">
        <img src={item.image}  alt={item.title} className="w-full h-full object-cover"/>
        </div>
    <div>
          <h3 className="text-black text-sm font-medium mt-1">{item.title}</h3>
        <p className="text-gray-400 text-sm"> ${item.price}</p> 
    </div>
          </div>
        ))}

      </div>

      <div className="flex justify-center gap-3 mb-10">
        <button onClick={() => setStart(0)} className="px-3 py-1 border">1</button>
        <button onClick={() => setStart(6)} className="px-3 py-1 border">2</button>
        <button onClick={() => setStart(12)} className="px-3 py-1 border">3</button>
      </div>

    </section>
  );
}

export default Products;
