import { useState } from "react";

const products = [
  { id: 1, name: "Premium Laptop", price: 50000, icon: "💻" },
  { id: 2, name: "Wireless Mouse", price: 2000, icon: "🖱️" },
  { id: 3, name: "Gaming Headphone", price: 1500, icon: "🎧" },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Unique ID generator to avoid removal of multiple same items at once
    setCart([...cart, { ...product, cartId: Math.random() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-8 text-center">
          Gadget <span className="text-indigo-600">Shop</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6 text-slate-700 flex items-center">
              <span className="mr-2">🛍️</span> Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                  <p className="text-indigo-600 font-semibold mt-1">৳ {item.price.toLocaleString()}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>+</span> Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 h-fit sticky top-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">Your Cart</h2>
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">
                {cart.length} Items
              </span>
            </div>

            <div className="space-y-4 `max-h-[400px]` overflow-y-auto pr-2 custom-scrollbar">
              {cart.length === 0 ? (
                <p className="text-slate-400 text-center py-10">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-xl group"
                  >
                    <div>
                      <h4 className="font-medium text-slate-700 text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-500">৳ {item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all"
                      title="Remove"
                    >
                      <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-500 font-medium">Total Amount</span>
                <span className="text-2xl font-bold text-slate-900">৳ {totalPrice.toLocaleString()}</span>
              </div>
              <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed" disabled={cart.length === 0}>
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
