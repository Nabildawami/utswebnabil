<template>
    <div>  
      <div class="container">
        <h1>RESET PASSWORD</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="resetPassword">Reset Password</label>
            <input type="password" id="resetPassword" v-model="resetPassword" required>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          </div>
          <button type="submit">SEND OTP RESET LINK</button>
        </form>
        <p>! HARAP GUNAKAN EMAIL KAMPUS</p>
  
        <div class="links">
          <router-link to="/">Informasi Product<span class="icon">ICON</span></router-link>
          <router-link to="/daftar">Make Account<span class="icon">ICON</span></router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        resetPassword: '',
        confirmPassword: ''
      };
    },
    methods: {
      submitForm() {
        // Logic untuk mengirim formulir
        console.log('Reset Password:', this.resetPassword);
        console.log('Confirm Password:', this.confirmPassword);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya CSS Anda bisa disalin ke sini */
  .judull {
    text-align: center;
  }
  
  .container {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="password"] {
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
  