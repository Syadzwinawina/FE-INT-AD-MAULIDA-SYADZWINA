// import React, { useState } from 'react';
// import { useLocation, Link, useNavigate } from 'react-router-dom';

// const Order = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { state } = location;
//   const product = state?.product;

//   const [quantity, setQuantity] = useState(1);
//   const [name, setName] = useState('');

//   if (!product) {
//     return <p>Produk tidak ditemukan.</p>;
//   }

//   const totalPrice = product.harga * quantity; // Pastikan untuk menggunakan 'harga'

//   const handleOrder = () => {
//     // Navigasi ke halaman riwayat pemesanan dengan detail pemesanan
//     navigate('/rpemesanan', { state: { product, quantity, totalPrice, name } });
//   };

//   return (
//     <div className="flex min-h-screen bg-pink-200">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-600 shadow-md">
//         <div className="p-4 border-b">
//           <h2 className="text-xl font-bold text-center">Hi.. Friends</h2>
//         </div>
//         <ul className="p-4">
//           <li className="mb-2">
//             <button 
//               onClick={() => navigate("/profile")} 
//               className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full"
//             >
//               Lihat Profil
//             </button>
//           </li>
//           <li className="mb-2">
//             <button 
//               onClick={() => navigate("/rpemesanan")} 
//               className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full"
//             >
//               Lihat Pesanan
//             </button>
//           </li>
//           <li className="mb-2">
//             <button 
//               onClick={() => navigate("/rpassword")} 
//               className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center transition duration-300 w-full"
//             >
//               Ganti Password
//             </button>
//           </li>
//           <li className="mb-2">
//             <button 
//               onClick={() => navigate("/home")} 
//               className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 block text-center transition duration-300 w-full"
//             >
//               Keluar
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="p-8 bg-white rounded shadow-md w-full max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold mb-4 text-center">Halaman Pemesanan</h2>
//           <div className="flex items-center mb-4">
//             <img
//               src={product.images} // Ganti 'src' menjadi 'images' sesuai struktur data
//               alt={product.nama} // Ganti 'alt' menjadi 'nama' sesuai struktur data
//               className="w-48 h-48 object-cover rounded"
//             />
//             <div className="ml-4">
//               <h3 className="text-xl font-semibold">{product.nama}</h3>
//               <p className="text-gray-600">Harga Satuan: Rp {product.harga.toLocaleString()}</p>
//               <div className="mt-4">
//                 <label className="block mb-2">Jumlah:</label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                   className="block w-24 p-2 border rounded"
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="block mb-2">Nama:</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="block w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <p className="mt-4 text-lg font-semibold">Total Harga: Rp {totalPrice.toLocaleString()}</p>
//             </div>
//           </div>
//           <div className="mt-8 text-left">
//             <button
//               onClick={handleOrder}
//               className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
//             >
//               Pesan
//             </button>
//             <div className="mt-4">
//               <Link to="/produk" className="text-red-500 hover:underline">
//                 Kembali ke Produk
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Data produk dari Produk

  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');

  if (!product) {
    return <p>Produk tidak ditemukan.</p>;
  }

  const totalPrice = product.price * quantity;

  const handleOrder = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity,
          total_price: totalPrice,
          name: customerName,
        }),
      });

      if (response.ok) {
        const orderData = await response.json();
        // Arahkan ke halaman riwayat pesanan (R_Pemesanan) dengan data pesanan
        navigate('/rpemesanan', { state: { order: orderData, quantity, totalPrice, customerName } });
      } else {
        const errorData = await response.json();
        alert(`Terjadi kesalahan: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim pesanan.');
    }
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
          <h2 className="text-2xl font-bold mb-4 text-center">Halaman Pemesanan</h2>
          <div className="flex items-center mb-4">
            <img src={product.src} alt={product.alt} className="w-48 h-48 object-cover rounded" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">{product.alt}</h3>
              <p>Rp {product.price.toLocaleString()}</p>
              <div className="mt-4">
                <label>Jumlah:</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="block w-24 p-2 border rounded"
                />
              </div>
              <div className="mt-4">
                <label>Nama:</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="block w-full p-2 border rounded"
                  required
                />
              </div>
              <p className="mt-4 text-lg font-semibold">Total Harga: Rp {totalPrice.toLocaleString()}</p>
            </div>
          </div>
          <button onClick={handleOrder} className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Pesan</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
