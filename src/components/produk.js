// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import produk1 from '../images/produk1.jpeg';
// import produk2 from '../images/produk2.jpeg';
// import produk3 from '../images/produk3.jpg';
// import produk4 from '../images/produk4.jpeg';
// import produk5 from '../images/produk5.jpeg';
// import produk6 from '../images/produk6.jpeg';

// const Produk = () => {
//   const navigate = useNavigate();
  
//   const products = [
//     { id: 1, src: produk1, alt: 'Produk 1', price: 100000 },
//     { id: 2, src: produk2, alt: 'Produk 2', price: 150000 },
//     { id: 3, src: produk3, alt: 'Produk 3', price: 200000 },
//     { id: 4, src: produk4, alt: 'Produk 4', price: 250000 },
//     { id: 5, src: produk5, alt: 'Produk 5', price: 300000 },
//     { id: 6, src: produk6, alt: 'Produk 6', price: 350000 },
//   ];

//   const handleProductClick = (product) => {
//     // Pass selected product data to the order page
//     navigate('/orders', { state: { product } });
//   };

//   return (
//     <div className="flex min-h-screen bg-pink-200">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-600 shadow-md">
//         <div className="p-4 border-b">
//           <h2 className="text-xl font-bold text-center">Hi.. Friends</h2>
//         </div>
//         <ul className="p-4">
//   <li className="mb-2">
//     <button 
//       onClick={() => navigate("/profile")} 
//       className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full"
//     >
//       Lihat Profil
//     </button>
//   </li>
//   <li className="mb-2">
//     <button 
//       onClick={() => navigate("/rpemesanan")} 
//       className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full"
//     >
//       Lihat Pesanan
//     </button>
//   </li>
//   <li className="mb-2">
//     <button 
//       onClick={() => navigate("/rpassword")} 
//       className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full"
//     >
//       Ganti Password
//     </button>
//   </li>
//   <li className="mb-2">
//     <button 
//       onClick={() => navigate("/home")} 
//       className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 block text-center transition duration-300 w-full"
//     >
//       Keluar
//     </button>
//   </li>
// </ul>

//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="p-8 bg-white rounded shadow-md w-full max-w-4xl mx-auto">
//           <div className="flex justify-center items-center mb-4">
//             <input 
//             type="text" 
//             placeholder="Cari produk..." 
//             className="border rounded-l-md p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-gray-500"
//   />
//   <button 
//     className="bg-gray-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-300"
//   >
//     Cari
//   </button>
// </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {products.map(product => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded shadow-md overflow-hidden cursor-pointer"
//                 onClick={() => navigate("/orders")} 
//               >
//                 <img
//                   src={product.src}
//                   alt={product.alt}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-center">{product.alt}</h3>
//                   <p className="text-center text-gray-600">Rp {product.price.toLocaleString()}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Produk;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import produk1 from '../images/produk1.jpeg';
import produk2 from '../images/produk2.jpeg';
import produk3 from '../images/produk3.jpg';
import produk4 from '../images/produk4.jpeg';
import produk5 from '../images/produk5.jpeg';
import produk6 from '../images/produk6.jpeg';

const Produk = () => {
  const navigate = useNavigate();
  
  const products = [
    { id: 1, src: produk1, alt: 'Produk 1', price: 100000 },
    { id: 2, src: produk2, alt: 'Produk 2', price: 150000 },
    { id: 3, src: produk3, alt: 'Produk 3', price: 200000 },
    { id: 4, src: produk4, alt: 'Produk 4', price: 250000 },
    { id: 5, src: produk5, alt: 'Produk 5', price: 300000 },
    { id: 6, src: produk6, alt: 'Produk 6', price: 350000 },
  ];

  const handleProductClick = (product) => {
    // Mengarahkan pengguna ke halaman pesanan dengan mengirimkan data produk
    navigate('/orders', { state: { product } });
  };
 

  return (
    <div className="flex min-h-screen bg-pink-200">
      {/* Sidebar */}
      <div className="w-64 bg-gray-600 shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-center">Hi.. Friends</h2>
        </div>
        <ul className="p-4">
          <li className="mb-2">
            <button onClick={() => navigate("/profile")} className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full">Lihat Profil</button>
          </li>
          <li className="mb-2">
            <button onClick={() => navigate("/rpemesanan")} className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full">Lihat Pesanan</button>
          </li>
          <li className="mb-2">
            <button onClick={() => navigate("/rpassword")} className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full">Ganti Password</button>
          </li>
          <li className="mb-2">
            <button onClick={() => navigate("/home")} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 block text-center transition duration-300 w-full">Keluar</button>
          </li>
        </ul>
      </div>

      {/* Konten Utama */}
      <div className="flex-1 p-8">
        <div className="p-8 bg-white rounded shadow-md w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white rounded shadow-md overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(product)} // Mengirimkan produk yang benar
              >
                <img src={product.src} alt={product.alt} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center">{product.alt}</h3>
                  <p className="text-center text-gray-600">Rp {product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;
