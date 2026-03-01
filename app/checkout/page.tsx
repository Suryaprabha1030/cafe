"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useWishlist } from "../shop/wishlistContext";
import CartItem from "../shop/CartItem";

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const subtotal = 199.99;
  const shipping = 0;
  const total = subtotal + shipping;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // alert("Order placed successfully!");
    toast.success("Order placed successfully!");
  };

  const { cart } = useWishlist();
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100  text-black">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex items-center mb-6 text-gray-600 hover:text-black transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Shop
        </button>

        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                We&apos;ll use this to contact you about your order
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
              <p className="text-sm text-gray-500 mb-4">
                Where should we deliver your order?
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    name="fullName"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Street Address *
                  </label>
                  <textarea
                    name="address"
                    placeholder="House number, street name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City *
                    </label>
                    <input
                      name="city"
                      placeholder="Mumbai"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      State *
                    </label>
                    <input
                      name="state"
                      placeholder="Maharashtra"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    PIN Code *
                  </label>
                  <input
                    name="pincode"
                    placeholder="400001"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            {/* <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
              <p className="text-sm text-gray-500 mb-4">
                Choose how you&apos;d like to pay
              </p>

              <div className="space-y-3">
                <label
                  className={`flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition ${
                    formData.paymentMethod === "cod"
                      ? "border-indigo-500 bg-indigo-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleInputChange}
                  />
                  <div>
                    <div className="font-semibold">Cash on Delivery</div>
                    <div className="text-sm text-gray-500">
                      Pay when you receive
                    </div>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition ${
                    formData.paymentMethod === "phonepe"
                      ? "border-indigo-500 bg-indigo-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="phonepe"
                    checked={formData.paymentMethod === "phonepe"}
                    onChange={handleInputChange}
                  />
                  <div>
                    <div className="font-semibold">PhonePe</div>
                    <div className="text-sm text-gray-500">
                      Pay with PhonePe UPI
                    </div>
                  </div>
                </label>
              </div>
            </div> */}
          </div>

          {/* Right Section (Order Summary) */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-8 text-black">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              {/* Items List */}
              <div className="space-y-3 max-h-64  overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Example static item */}
                {/* <div className="flex gap-3"> */}
                {/* <div className="w-16 h-16 bg-gray-200 rounded-md" /> */}
                {/* <div className="flex-1">
                    <div className="font-medium text-sm">Coffee Beans</div>
                    <div className="text-sm text-gray-500">Qty: 2</div>
                  </div> */}
                {/* <div className="font-semibold">$99.99</div> */}
                {/* </div> */}
                {cart.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </div>

              <hr className="my-4" />

              {/* Totals */}
              <div className="space-y-2 text-sm">
                {/* <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs.{totalPrice.toFixed(2)}</span>
                </div> */}
                {/* <div className="flex justify-between">
                  <span>Shipping</span>
                  <span> */}
                {/* {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`} */}
                {/* Rs.100 */}
                {/* </span> */}
                {/* </div> */}

                {/* <hr className="my-2" /> */}

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs.{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-card3 transition"
              >
                Place Order
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By placing your order, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
