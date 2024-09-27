// import React from 'react'
// import st from '../assets/images/image-waffle-desktop.jpg'
// import add from '../assets/icons/icon-add-to-cart.svg'
// import Wrapper from './Wrapper'
// import empty from '../assets/icons/illustration-empty-cart.svg'
// import bean from '../assets/images/image-creme-brulee-desktop.jpg'
// import macaron from '../assets/images/image-macaron-desktop.jpg'
// import tira from '../assets/images/image-tiramisu-desktop.jpg'
// import lava from '../assets/images/image-baklava-desktop.jpg'
// import lemon from '../assets/images/image-meringue-desktop.jpg'
// import red from '../assets/images/image-cake-desktop.jpg'
// import brownie from '../assets/images/image-brownie-desktop.jpg'
// import panna from '../assets/images/image-panna-cotta-desktop.jpg'


// const Desserts = () => {
//   return (
//    <Wrapper>
//      <div className="flex bg-yellow-50">
//         <div className="w-[57%]">
//         <h1 className="text-4xl font-bold p-6 w-[70%]">Desserts</h1>
//         <div className="general-product grid grid-cols-3  ">
//         <div className="_id-one mb-6">
//             <img src={st} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">waffle</p>
//             <p>waffle with Berries</p>
//             <p className="text-red-500">$6.50</p>
//         </div>
//         <div className="_id-one ">
//             <img src={bean} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">Cream Brulee</p>
//             <p>Vanilla Bean Cream Brulee</p>
//             <p className="text-red-500">$7.00</p>
//         </div>
//         <div className="_id-one ">
//             <img src={macaron} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">Macaron</p>
//             <p>Macaron Mix of Five</p>
//             <p className="text-red-500">$8.00</p>
//         </div>
//         <div className="_id-one mb-6">
//             <img src={tira} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">Tiramisu</p>
//             <p>Classic Tiramisu</p>
//             <p className="text-red-500">$5.50</p>
//         </div>
//         <div className="_id-one ">
//             <img src={lava} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">Baklava</p>
//             <p>Pistachio Baklava </p>
//             <p className="text-red-500">$4.00</p>
//         </div>
//         <div className="_id-one ">
//             <img src={lemon} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">Pie</p>
//             <p>Lemon Meringue Pie</p>
//             <p className="text-red-500">$5.00</p>
//         </div>
//         <div className="_id-one mb-6">
//             <img src={red} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">Cake</p>
//             <p>Red Velvet Cake</p>
//             <p className="text-red-500">$4.50</p>
//         </div>
//         <div className="_id-one ">
//             <img src={brownie} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">Brownie</p>
//             <p>Salted Caramel Brownie</p>
//             <p className="text-red-500">$5.50</p>
//         </div>
//         <div className="_id-one ">
//             <img src={panna} alt=""  className="w-52 h-52 rounded-lg"/>
//             <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
//             <img src={add} alt=""  className=""/>
//             <p>Add to Cart</p>
//             </div>
//             <p className="text-sm text-gray-500">Panna Cotta</p>
//             <p>Vanilla Panna Cotta</p>
//             <p className="text-red-500">$6.50</p>
//         </div>
//         </div>
//     </div>
//     <div className="w-[30%]  p-6">
//   <div className="bg-white h-[25%] rounded-lg p-4">
//     {/* Adjust margin for the h2 */}
//     <h2 className="text-2xl font-bold text-red-500 mt-4 ml-4">Your Cart (0)</h2>
    
//     {/* Center the image */}
//    <div className="mt-6">
//    <div className="flex items-center justify-center h-full">
//       <div>
//       <img src={empty} alt="" className="w-24 h-24" />
//       </div>
//     </div>
//     <div>
//       <p className="text-xs flex items-center justify-center mt-1">Your added items will appear here</p>
//       </div>
//    </div>
//   </div>
// </div>

//     </div>
//    </Wrapper>
//   )
// }

// export default Desserts























import React from 'react'
import st from '../assets/images/image-waffle-desktop.jpg'
import add from '../assets/icons/icon-add-to-cart.svg'
import Wrapper from './Wrapper'
import empty from '../assets/icons/illustration-empty-cart.svg'
import bean from '../assets/images/image-creme-brulee-desktop.jpg'
import macaron from '../assets/images/image-macaron-desktop.jpg'
import tira from '../assets/images/image-tiramisu-desktop.jpg'
import lava from '../assets/images/image-baklava-desktop.jpg'
import lemon from '../assets/images/image-meringue-desktop.jpg'
import red from '../assets/images/image-cake-desktop.jpg'
import brownie from '../assets/images/image-brownie-desktop.jpg'
import panna from '../assets/images/image-panna-cotta-desktop.jpg'

const Desserts = () => {
  return (
    <Wrapper>
      <div className="flex bg-yellow-50 flex-col lg:flex-row">
        <div className="lg:w-[57%] w-full mx-4 lg:mx-0">
          <h1 className="text-4xl font-bold p-6 w-full lg:w-[70%]">Desserts</h1>
          <div className="general-product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="_id-one mb-6">
              <img src={st} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Waffle</p>
              <p>Waffle with Berries</p>
              <p className="text-red-500">$6.50</p>
            </div>
            <div className="_id-one">
              <img src={bean} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Cream Brulee</p>
              <p>Vanilla Bean Cream Brulee</p>
              <p className="text-red-500">$7.00</p>
            </div>
            <div className="_id-one">
              <img src={macaron} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Macaron</p>
              <p>Macaron Mix of Five</p>
              <p className="text-red-500">$8.00</p>
            </div>
            <div className="_id-one mb-6">
              <img src={tira} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Tiramisu</p>
              <p>Classic Tiramisu</p>
              <p className="text-red-500">$5.50</p>
            </div>
            <div className="_id-one">
              <img src={lava} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Baklava</p>
              <p>Pistachio Baklava</p>
              <p className="text-red-500">$4.00</p>
            </div>
            <div className="_id-one">
              <img src={lemon} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Pie</p>
              <p>Lemon Meringue Pie</p>
              <p className="text-red-500">$5.00</p>
            </div>
            <div className="_id-one mb-6">
              <img src={red} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Cake</p>
              <p>Red Velvet Cake</p>
              <p className="text-red-500">$4.50</p>
            </div>
            <div className="_id-one">
              <img src={brownie} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Brownie</p>
              <p>Salted Caramel Brownie</p>
              <p className="text-red-500">$5.50</p>
            </div>
            <div className="_id-one">
              <img src={panna} alt="" className="w-52 h-52 rounded-lg" />
              <div className="bg-white rounded-full border border-gray-400 w-40 h-10 gap-2 relative bottom-5 left-6 flex items-center justify-center">
                <img src={add} alt="" />
                <p>Add to Cart</p>
              </div>
              <p className="text-sm text-gray-500">Panna Cotta</p>
              <p>Vanilla Panna Cotta</p>
              <p className="text-red-500">$6.50</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-full p-6 mx-4 lg:mx-0">
          <div className="bg-white h-[25%] rounded-lg p-4">
            <h2 className="text-2xl font-bold text-red-500 mt-4 ml-4">Your Cart (0)</h2>
            <div className="mt-6 flex flex-col items-center justify-center h-full">
              <img src={empty} alt="" className="w-24 h-24" />
              <p className="text-xs text-center mt-2">Your added items will appear here</p> {/* Adjusted paragraph placement */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Desserts
