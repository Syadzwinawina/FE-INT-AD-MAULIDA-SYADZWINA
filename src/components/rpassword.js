import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi: pastikan password baru dan konfirmasi cocok
    if (newPassword !== confirmPassword) {
      setError('Password baru dan konfirmasi tidak cocok');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Jika menggunakan token
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
          new_password_confirmation: newPassword, // Pastikan nama field sesuai dengan validasi di Laravel
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess(result.message);
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setSuccess('');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Terjadi kesalahan saat mengubah password.');
      setSuccess('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Ganti Password</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Password Lama */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Password Lama</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Password Baru */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Password Baru</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Konfirmasi Password Baru */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Konfirmasi Password Baru</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Success message */}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          {/* Button submit */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Ganti Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
