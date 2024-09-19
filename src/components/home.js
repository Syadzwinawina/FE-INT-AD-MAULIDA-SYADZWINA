import React from 'react';
import { useNavigate } from 'react-router-dom';
import kecantikanImage from '../images/kecantikan.jpeg';
// import signUpImage from '../images/signup.jpg'; // import gambar langsung

const Home = () => {
  const navigate = useNavigate(); // gunakan useNavigate untuk navigasi

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Aplikasi Kecantikan</h2>
        <div className="mb-4">
          <img src={kecantikanImage} alt="Pengertian Kecantikan" className="w-full h-48 object-cover mb-4 rounded" />
          <h3 className="text-xl font-normal mb-2 text-center cursive-font">
            Kecantikan dapat diartikan sebagai kualitas atau kelompok kualitas yang menyenangkan dan menarik, terutama untuk dilihat. 
            Kecantikan dapat dilihat dari fisik, sifat manusia, dan kenikmatan yang dialami melalui interaksi dengan sesuatu yang lebih abstrak.
          </h3> {/* Teks di tengah */}
          
          <button 
            onClick={() => navigate('/signin')} 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Login
          </button>
        </div>
        <div>
          {/* <h3 className="text-xl font-semibold mb-2">Sign Up</h3> */}
          {/* <img src={signUpImage} alt="Sign Up" className="w-full h-48 object-cover mb-4 rounded" /> */}
          <button 
            onClick={() => navigate('/signup')} 
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Registrasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
