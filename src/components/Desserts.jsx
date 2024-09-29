import React, { useState, useEffect } from 'react';
import st from '../assets/images/image-waffle-desktop.jpg';
import add from '../assets/icons/icon-add-to-cart.svg';
import Wrapper from './Wrapper';
import empty from '../assets/icons/illustration-empty-cart.svg';
import bean from '../assets/images/image-creme-brulee-desktop.jpg';
import macaron from '../assets/images/image-macaron-desktop.jpg';
import tira from '../assets/images/image-tiramisu-desktop.jpg';
import lava from '../assets/images/image-baklava-desktop.jpg';
import lemon from '../assets/images/image-meringue-desktop.jpg';
import red from '../assets/images/image-cake-desktop.jpg';
import brownie from '../assets/images/image-brownie-desktop.jpg';
import panna from '../assets/images/image-panna-cotta-desktop.jpg';
import { IoIosRemoveCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';
import { CiCirclePlus } from 'react-icons/ci';
import confirm from '../assets/images/icon-order-confirmed.svg'

const Desserts = () => {
  const [cart, setCart] = useState([]); // Store cart items
  const [orderConfirmed, setOrderConfirmed] = useState(false); // Order confirmation toggle

  useEffect(() => {
    if (orderConfirmed) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal is active
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is hidden
    }
  }, [orderConfirmed]);

  const desserts = [
    { id: 1, name: 'Waffle', description: 'Waffle with Berries', price: 6.5, image: st },
    { id: 2, name: 'Cream Brulee', description: 'Vanilla Bean Cream Brulee', price: 7.0, image: bean },
    { id: 3, name: 'Macaron', description: 'Macaron Mix of Five', price: 8.0, image: macaron },
    { id: 4, name: 'Tiramisu', description: 'Classic Tiramisu', price: 5.5, image: tira },
    { id: 5, name: 'Baklava', description: 'Pistachio Baklava', price: 4.0, image: lava },
    { id: 6, name: 'Lemon Meringue Pie', description: 'Lemon Meringue Pie', price: 5.0, image: lemon },
    { id: 7, name: 'Red Velvet Cake', description: 'Red Velvet Cake', price: 4.5, image: red },
    { id: 8, name: 'Brownie', description: 'Salted Caramel Brownie', price: 5.5, image: brownie },
    { id: 9, name: 'Panna Cotta', description: 'Vanilla Panna Cotta', price: 6.5, image: panna },
  ];

  const addToCart = (dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dessert.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleConfirmOrder = () => {
    setOrderConfirmed(true); // Toggle the order confirmation state
  };

  const handleNewOrder = () => {
    setCart([]); // Clear the cart
    setOrderConfirmed(false); // Reset the order confirmation
    window.location.reload(); // Reload the page to start a new order
  };

  return (
    <Wrapper>
      <div className="flex bg-yellow-50 flex-col lg:flex-row overflow-hidden relative">
        {/* Modal-style Order Confirmation */}
        {orderConfirmed && (
          <div className="fixed inset-0 flex justify-center items-start sm:items-center z-20 bg-gray-900 bg-opacity-90 overflow-hidden">
            <div className="bg-white p-6 rounded-lg w-full lg:w-[450px] max-w-xl shadow-lg mt-20 sm:mt-0 h-full sm:h-auto">
              <div>
               <div className="p-4 relative right-4">
               <img src={confirm} alt="" className="h-10 w-10"/>
               </div>
              <h1 className="text-3xl font-bold  text-black">Order Confirmed</h1>
              <p className=" text-sm mt-4">We hope you enjoy your food!</p>
              </div>
              <div className="mt-8 overflow-auto max-h-[60vh] rounded-md bg-yellow-50 border border-none">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4 ">
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg" />
                    <div className="flex flex-col ml-4">
                      <p className="font-bold">{item.description}</p>
                      <div className="flex gap-3">
                      <p className="text-red-500">x{item.quantity} </p>
                      <p>@ ${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center font-bold mt-8">
                  <p>Total Amount:</p>
                  <p>${calculateTotal()}</p>
                </div>
                <button
                  className="mt-8 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full w-full"
                  onClick={handleNewOrder}
                >
                  Start New Order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Left Div (Product List) */}
        <div className="lg:w-[57%] w-full mx-4 lg:mx-0">
          <h1 className="text-4xl font-bold p-6 w-full lg:w-[70%]">Desserts</h1>
          <div className="general-product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {desserts.map((dessert) => (
              <div key={dessert.id} className="mb-2 lg:mb-3">
                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className="w-[350px] md:w-[370px] h-64 relative right-4 lg:right-0 lg:w-52 lg:h-52 sm:w-9 sm:h-56 rounded-lg lg:rounded-md"
                />
                {cart.some((item) => item.id === dessert.id) ? (
                  <div className="bg-red-700 rounded-full border border-gray-400 w-40 h-10 gap-2 flex items-center justify-between px-4 relative bottom-5 lg:left-6 lg:h-9 left-20">
                    <button
                      onClick={() => updateQuantity(dessert.id, -1)}
                      className="text-lg text-white font-bold"
                    >
                      <IoIosRemoveCircleOutline className="text-white hover:text-black" />
                    </button>
                    <span className="text-white">
                      {cart.find((item) => item.id === dessert.id).quantity}
                    </span>
                    <button onClick={() => updateQuantity(dessert.id, 1)} className="text-lg font-bold">
                      <CiCirclePlus className="text-white hover:text-black" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => addToCart(dessert)}
                    className="bg-white rounded-full border border-gray-400 w-40 h-10 lg:h-9 gap-2 flex items-center justify-center cursor-pointer hover:border-red-600 relative bottom-5 lg:left-6 left-20 md:left-24"
                  >
                    <img src={add} alt="Add to Cart" className="" />
                    <p className="hover:text-red-600">Add to Cart</p>
                  </div>
                )}
                <p className="text-sm text-gray-500">{dessert.name}</p>
                <p>{dessert.description}</p>
                <p className="text-red-500">${dessert.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Div (Cart Section) */}
        <div className="lg:w-[30%] w-full p-6 mx-4 lg:mx-0">
          <div className="bg-white h-auto rounded-lg p-4">
            <h2 className="text-2xl font-bold text-red-500 mt-4 ml-4">Your Cart ({cart.length})</h2>
            {cart.length > 0 ? (
              <div className="mt-6">
                {cart.map((item) => (
                  <div key={item.id} className="mb-4 p-4 border-b border-gray-300">
                    <p className="font-bold">{item.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <span className="text-red-500 mr-4">{item.quantity}x</span>
                        <span className="mr-4 text-gray-500">@ ${item.price.toFixed(2)}</span>
                        <span className="text-black">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-lg font-bold"
                      >
                        <IoIosCloseCircleOutline className="text-gray-400 hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center font-bold mt-4">
                  <p>Total</p>
                  <p>${calculateTotal()}</p>
                </div>

                <button
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full w-[90%] relative left-3"
                  onClick={handleConfirmOrder}
                >
                  Confirm Order
                </button>
              </div>
            ) : (
              <div className="mt-6 flex flex-col items-center justify-center h-full">
                <img src={empty} alt="Empty Cart" className="w-24 h-24" />
                <p className="text-xs text-center mt-2">Your added items will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Desserts;


