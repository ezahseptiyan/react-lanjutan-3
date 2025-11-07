import React from 'react';
import './App.css';

function App() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Form Registrasi</h2>
        <label>Nama Lengkap</label>
        <input type="text" placeholder="Masukkan nama kamu" />

        <label>Username</label>
        <input type="text" placeholder="Masukkan username kamu" />

        <label>Email</label>
        <input type="email" placeholder="Masukkan email kamu" />

        <label>Password</label>
        <input type="password" placeholder="Masukkan password" />

        <button>Daftar Sekarang 💖</button>
      </form>
    </div>
  );
}

export default App;
