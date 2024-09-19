
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     nama: 'John Doe',
//     alamat: '123 Main St, Anytown',
//     email: 'john.doe@example.com'
//   });

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <div className="p-8 bg-white rounded shadow-md w-full max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4 text-center">Profil Saya</h2>
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold">Nama:</h3>
//           <p>{profile.nama}</p>
//         </div>
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold">Alamat:</h3>
//           <p>{profile.alamat}</p>
//         </div>
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold">Email:</h3>
//           <p>{profile.email}</p>
//         </div>
//         <div className="mt-8 text-center">
//           <Link to="/produk" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             Kembali
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState({
    nama: '',
    alamat: '',
    email: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Ambil token dari localStorage (disimpan setelah login)
        const response = await fetch('http://localhost:8000/api/user', {
          headers: {
            'Authorization': `Bearer ${token}` // Sertakan token dalam header
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProfile({
            nama: data.name,
            alamat: data.alamat,
            email: data.email,
          });
        } else {
          console.error('Gagal mengambil data profil');
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };

    fetchProfile();
  }, []); // Panggil sekali ketika komponen pertama kali dirender

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Profil Saya</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Nama:</h3>
          <p>{profile.nama}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Alamat:</h3>
          <p>{profile.alamat}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Email:</h3>
          <p>{profile.email}</p>
        </div>
        <div className="mt-8 text-center">
          <Link to="/produk" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
