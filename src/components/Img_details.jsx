function Img_details() {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        <div className="w-full md:w-1/2 flex gap-4">
          <div className="flex flex-col gap-4 w-20">
            <img src="/img1.jpg" className="w-full h-20 object-cover border" />
            <img src="/img2.jpg" className="w-full h-20 object-cover border" />
            <img src="/img3.jpg" className="w-full h-20 object-cover border" />
            <img src="/img4.jpg" className="w-full h-20 object-cover border" />
            <img src="/img5.jpg" className="w-full h-20 object-cover border" />
          </div>

          <div className="flex-1 border">
            <img
              src="/main.jpg"
              className="w-full h-full object-cover"
              alt="Product"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-2">
            Boxy5 T-Shirt with Roll Sleeve
          </h1>
          <p className="text-xl text-gray-800 mb-4">$20.00</p>

          <p className="text-sm text-gray-500 mb-6">
            Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at
            ipsum blandit ornare vel sed velit.
          </p>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Size</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border text-sm">S</button>
              <button className="px-4 py-2 border text-sm">M</button>
              <button className="px-4 py-2 border text-sm">L</button>
              <button className="px-4 py-2 border text-sm">XL</button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Color</p>
            <div className="flex gap-3">
              <span className="w-8 h-8 bg-gray-400 border" />
              <span className="w-8 h-8 bg-red-500 border" />
              <span className="w-8 h-8 bg-gray-800 border" />
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border">
              <button className="px-3 py-2 text-lg">-</button>
              <span className="px-4 py-2 border-x">1</span>
              <button className="px-3 py-2 text-lg">+</button>
            </div>
            <button className="px-6 py-3 bg-black text-white text-sm">
              ADD TO CART
            </button>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              turpis sed lorem dignissim vulputate nec cursus ante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Img_details;
