import React, { useEffect } from "react";

const CartModal = ({ cart, setCart, setIsCartModalOpen }) => {
  // Handle quantity change
  const handleQuantityChange = (index, amount) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity + amount > 0) {
      updatedCart[index].quantity += amount;
    } else {
      updatedCart.splice(index, 1); // Remove item if quantity becomes 0
    }
    setCart(updatedCart); // Update the cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Handle item removal from cart
  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, idx) => idx !== index);
    setCart(updatedCart); // Update the cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    // Ensure every item has a quantity of 1 if not already set
    const updatedCart = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1, // Set default quantity to 1
    }));
    setCart(updatedCart); // Update the cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  }, [cart, setCart]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-400 rounded-[20px] w-[80vw] max-w-md p-6 overflow-y-auto max-h-[80vh]">
        <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
        <ul className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.imageURL}
                    alt={item.product}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <span className="mr-4">{item.product}</span>
                  <span className="mr-4">{item.price} ₽</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </ul>
        <div className="flex justify-between mt-4">
          <div className="font-semibold text-lg">Total: {totalPrice} ₽</div>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsCartModalOpen(false)}
              className="bg-gray-500 text-white rounded-lg px-4 py-2"
            >
              Close
            </button>
            <button
              onClick={() => alert("Proceeding to checkout...")}
              className="bg-blue-600 text-white rounded-lg px-4 py-2"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
