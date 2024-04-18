<template>
    <div>
      <div class="container">
        <h1>Lupa Password</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <button type="submit">SEND PASSWORD RESET LINK</button>
        </form>
        <p>! HARAP GUNAKAN EMAIL KAMPUS</p>
  
        <div class="links">
          <router-link to="/about">Informasi Product<span class="icon">ICON</span></router-link>
          <router-link to="/Reset">Make Account<span class="icon">ICON</span></router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '' // Untuk menyimpan nilai input email
      };
    },
    methods: {
      submitForm() {
        // Logika pengiriman formulir di sini
        console.log('Email yang dikirim:', this.email);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling untuk kontainer */
  .container {
    background-color: #f9f9f9;
    padding: 50px;
    border-radius: 5px;
    box-shadow: 0 6px 9px rgb(150, 147, 156);
    max-width: 500px; /* Mengatur lebar maksimum */
    margin: 0 auto; /* Pusatkan horizontal */
  }
  
  .container h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Styling untuk form */
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }
  
  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 0;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  
  button[type="submit"]:hover {
    background-color: #3e8e41;
  }
  
  /* Styling untuk pesan */
  .container p {
    text-align: center;
    margin-top: 10px;
    color: #888;
  }
  
  /* Styling untuk tautan */
  .links {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .links a {
    display: inline-block;
    text-decoration: none;
    color: #999;
  }
  
  .links .icon {
    margin-left: 5px;
  }
  </style>
  