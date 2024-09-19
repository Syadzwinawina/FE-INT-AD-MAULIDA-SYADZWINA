// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [nama, setNama] = useState('');
//   const [alamat, setAlamat] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     // Simulate registration
//     if (email && password && nama && alamat) {
//       // Show pop-up message
//       alert('Registrasi berhasil! Anda akan diarahkan ke halaman login.');

//       // Navigate to login page after a delay
//       setTimeout(() => {
//         navigate('/signin'); // Arahkan ke halaman login
//       }, 2000); // Delay 2 detik
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="p-8 bg-white rounded shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4">Masukkan Data Diri Anda</h2>
//         <form onSubmit={handleSignUp}>
//           <label className="block mb-2">
//             Nama:
//             <input
//               type="text"
//               value={nama}
//               onChange={(e) => setNama(e.target.value)}
//               className="block w-full mt-1 p-2 border rounded"
//               required
//             />
//           </label>
//           <label className="block mb-2">
//             Alamat:
//             <input
//               type="text"
//               value={alamat}
//               onChange={(e) => setAlamat(e.target.value)}
//               className="block w-full mt-1 p-2 border rounded"
//               required
//             />
//           </label>
//           <label className="block mb-2">
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="block w-full mt-1 p-2 border rounded"
//               required
//             />
//           </label>
//           <label className="block mb-4">
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="block w-full mt-1 p-2 border rounded"
//               required
//             />
//           </label>
//           <button
//             type="submit"
//             className="w-full p-2 bg-green-500 text-white rounded"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alamat, setAlamat] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      alamat,
    };

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Registrasi berhasil! Anda akan diarahkan ke halaman login.');
        navigate('/signin');
      } else {
        alert('Registrasi gagal! Periksa kembali data Anda.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      alert('Terjadi kesalahan saat registrasi.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="p-8 bg-pink-200 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Registrasi</h2>
        <form onSubmit={handleSignUp}>
          <label className="block mb-2">
            Nama:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full mt-1 p-2 border rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Alamat:
            <input
              type="text"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="block w-full mt-1 p-2 border rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full mt-1 p-2 border rounded"
              required
            />
          </label>
          <label className="block mb-4">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full mt-1 p-2 border rounded"
              required
            />
            
          </label>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

