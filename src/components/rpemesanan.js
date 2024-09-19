// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const R_Pemesanan = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { state } = location;
//   const { product, quantity, totalPrice, name } = state || {};

//   if (!product) {
//     return <p>Pesanan tidak ditemukan.</p>;
//   }

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
//           <h2 className="text-2xl font-bold mb-4 text-center">Riwayat Pemesanan</h2>
//           <div className="flex items-center mb-4">
//             <img
//               src={product.src}
//               alt={product.alt}
//               className="w-48 h-48 object-cover rounded"
//             />
//             <div className="ml-4">
//               <h3 className="text-xl font-semibold">Nama Pemesan: {name}</h3>
//               <p className="text-xl font-semibold">{product.alt}</p>
//               <p className="text-gray-600">Harga Satuan: Rp {product.price.toLocaleString()}</p>
//               <p className="text-gray-600">Jumlah: {quantity}</p>
//               <p className="mt-4 text-lg font-semibold">Total Harga: Rp {totalPrice.toLocaleString()}</p>
//             </div>
//           </div>
//           <div className="mt-8 text-center">
//             <Link to="/produk" className="text-blue-500 hover:underline">
//               Kembali ke Produk
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default R_Pemesanan;

import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const R_Pemesanan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order, quantity, customerName } = location.state || {};

  const [product, setProduct] = useState(null); // Untuk menyimpan data produk
  const [error, setError] = useState(null); // Untuk menyimpan error jika ada
  const [loading, setLoading] = useState(true); // Untuk menandakan bahwa data sedang dimuat

  useEffect(() => {
    if (order) {
      // Fetch detail produk terkait pesanan
      fetch(`http://localhost:8000/api/products/${order.product_id}`) // Pastikan endpoint sesuai dengan data produk
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error fetching product data');
          }
          return response.json();
        })
        .then((data) => {
          setProduct(data.product); // Simpan data produk dari pesanan
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
          setError('Gagal memuat data produk.');
        })
        .finally(() => {
          setLoading(false); // Data selesai dimuat (atau gagal dimuat)
        });
    }
  }, [order]);

  if (loading) {
    return <p>Memuat data...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!order) {
    return <p>Pesanan tidak ditemukan.</p>;
  }

  if (!product) {
    return <p>Data produk tidak ditemukan.</p>;
  }

  const totalPrice = product.harga * quantity;

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
          <h2 className="text-2xl font-bold mb-4 text-center">Riwayat Pemesanan</h2>
          <div className="flex items-center mb-4">
            {product && (
              <>
                <img
                  src={product.image_url} // Pastikan field ini sesuai dengan data dari backend
                  alt={product.nama}
                  className="w-48 h-48 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Nama Pemesan: {customerName}</h3>
                  <p className="text-xl font-semibold">{product.nama}</p>
                  <p>Harga Satuan: Rp {product.harga?.toLocaleString()}</p>
                  <p>Jumlah: {quantity}</p>
                  <p>Total Harga: Rp {totalPrice.toLocaleString()}</p>
                </div>
              </>
            )}
          </div>
          <Link to="/produk" className="text-blue-500 hover:underline">Kembali ke Produk</Link>
        </div>
      </div>
    </div>
  );
};

export default R_Pemesanan;
