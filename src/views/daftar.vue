<template>
    <div class="register-container">
      <div class="judul">
        <h1>ADATATIF</h1>
      </div>
  
      <div class="containerr">
        <h1>REGISTER</h1>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="nim">NIM</label>
            <input type="text" id="nim" v-model="formData.nim" required>
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="formData.password" required>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          </div>
          <div class="form-group forget">
            <input type="checkbox" id="showPassword" v-model="showPassword">
            <label for="showPassword">View Password</label>
          </div>
          <div class="forgett">
            <a href="/forget">Forget Password?</a>
          </div>
          <button type="submit">MAKE ACCOUNT</button>
        </form>
  
        <div class="links">
      <router-link to="/about">Informasi Product<span class="icon">ICON</span></router-link>
      <router-link to="/">Login<span class="icon">ICON</span></router-link>
    </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          nim: '',
          email: '',
          password: ''
        },
        confirmPassword: '',
        showPassword: false
      };
    },
    methods: {
      register() {
        // Handle registration logic here
        console.log('Registration submitted:', this.formData);
      }
    }
  };
  </script>
  <style>.register-container {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #090137;
  }
  
  .judul {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 30px;
    text-align: left;
    margin-right: 80px;
    box-shadow: 0 6px 9px rgb(150, 147, 156);
    margin-bottom: 10px;
    max-width: 900px; /* Atur lebar maksimal sesuai kebutuhan Anda */
    width: 500%; /* Agar div dapat mengambil lebar maksimal yang tersedia */
    max-height: 400px;
    height: 10%;
    margin-top: 0%; 
  }
  
  .judul h1 {
    font-size: 40px;
    color: rgb(3, 3, 45);
  }
  
  .judul p {
    color: rgb(3, 3, 45);
  }
  
  .containerr {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 6px 9px rgb(150, 147, 156);
  max-width: 1200px; /* Atur maksimum lebar yang diinginkan */
  width: 300%; /* Atur persentase lebar yang diinginkan */
  margin: 0 auto; /* untuk membuatnya menjadi center */
  margin-left: 5%; /* Menambahkan margin kiri sebesar 5% */
}

  .containerr h1 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }
  
  input[type="checkbox"] {
    margin-right: 5px;
  }
  
  button {
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
  
  button:hover {
    background-color: #3e8e41;
  }
  
  a {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: #999;
  }
  
  /* Media Queries */
@media only screen and (min-width: 900px) {
  .judul {
    width: 400px; /* Sesuaikan lebar pada layar yang lebih besar */
  }

  .containerr {
    max-width: 500px; /* Sesuaikan maksimum lebar pada layar yang lebih besar */
  }
}
  
  .links {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .links a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #999;
  }
  
  .links .icon {
    margin-left: 5px;
  }
  
  </style>
  