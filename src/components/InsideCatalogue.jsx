import React from "react";
import { jewelryCatalog } from "../constants";

const InsideCatalogue = () => {
  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.product === item.product);

    if (existingItemIndex === -1) {
      item.quantity = 1; // Initialize quantity if the item is new
      cart.push(item);
    } else {
      cart[existingItemIndex].quantity += 1; // Increment quantity if item exists
    }

    // Update localStorage only since we don't have setCart prop
    localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
    alert(`${item.product} has been added to your cart.`);
  };

  return (
    <div className="p-6 ">
      <div className="space-y-8">
        {jewelryCatalog.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl  font-semibold mb-6 text-gray-700">{category.type}</h2>
            {category.items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-400 shadow-md rounded-[27px] overflow-hidden transition-transform duration-500 scale-[1] hover:scale-[1.05]"
                  >
                    <img
                      src={item.imageURL}
                      alt={item.product}
                      width={800}
                      height={800}
                      className="h-[80%] w-full object-cover object-center rounded-t-[27px]"
                    />
                    <div className="flex justify-between items-center p-4">
                      <h3 className="font-semibold text-lg text-gray-800">{item.product}</h3>
                      <p className="font-semibold text-lg text-gray-600">{item.price} ₽</p>
                    </div>
                    <div className="flex justify-between px-4 pb-4 space-x-4">
                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                      >
                        Добавить в корзину
                      </button>

                      {/* Learn More Button */}
                      <button
                        className="w-full py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
                      >
                        Узнать больше
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No items available in this category.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsideCatalogue;
