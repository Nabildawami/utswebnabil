<template>
  <div class="login-container">
    <div class="judull">
      <h1>ADATATIF</h1>
      <p>Aplikasi Pendaftaran Tugas Akhir Teknik Informatika</p>
    </div>

    <div class="container">
      <h1>SILAKAN LOGIN</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group forget">
          <input type="checkbox" id="showPassword" v-model="showPassword">
          <label for="showPassword">View Password</label>
        </div>
        <div class="forgett"><a href="/forget">Forget Password?</a></div>
        <button type="submit">LOGIN</button>
      </form>

      <div class="links">
        <router-link to="/about">Informasi Product<span class="icon">ICON</span></router-link>
        <router-link to="/daftar">Make Account<span class="icon">ICON</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false
    };
  },
  methods: {
    login() {
      if (this.username.trim() !== '' && this.password.trim() !== '') {
        this.$router.push('/rumah');
      } else {
        alert('Silakan isi kedua input.');
      }
    }
  }
}
</script>

<style scoped>
/* halaman login */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #090137;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 6px 9px rgb(150, 147, 156);
  max-width: 400px;
  width: 100%;
}

.container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.judull {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 30px;
  text-align: left;
  margin-bottom: 20px;
  box-shadow: 0 6px 9px rgb(150, 147, 156);
  width: 100%;
  max-width: 400px;
}

.judull h1 {
  font-size: 40px;
  color: rgb(3, 3, 45);
  margin-bottom: -6px;
  margin-top: -2px;
}

.judull p {
  color: rgb(3, 3, 45);
}

.forgett {
  text-align: right;
  margin-bottom: 10px;
}

.forget {
  display: flex;
  align-items: center;
}

.forget input[type="checkbox"],
.forget label {
  margin-right: 10px;
}

.forget label {
  margin-bottom: 0;
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

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
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

</style>
