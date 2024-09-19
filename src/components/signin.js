// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Simulate authentication
//     if (email && password) {
//       navigate('/produk');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-400">
//      <div className="p-8 bg-pink-200 rounded shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={handleSignIn}>
//           <label className="block mb-2">
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="block w-full mt-1 p-2 border rounded "
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
//             className="w-full p-2 bg-pink-500 text-white rounded"
//           >
//             Masuk
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Data yang akan dikirim ke backend
    const credentials = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json(); // Ambil data respons di sini

      if (response.ok) {
        alert('Login berhasil! Anda akan diarahkan ke halaman produk.');
        navigate('/produk'); // Arahkan ke halaman produk setelah login berhasil
      } else {
        alert(data.message || 'Login gagal! Periksa kembali email dan password Anda.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      alert('Terjadi kesalahan saat login.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="p-8 bg-pink-200 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSignIn}>
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
            className="w-full p-2 bg-pink-500 text-white rounded"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

