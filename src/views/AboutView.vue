<template>
  <div class="about-container">
    <div class="about-content">
      <h1>ADATATIF</h1>
      <p>Aplikasi Pendaftaran Tugas Akhir Teknik Informatika</p>
      <span>ADATATIF (Aplikasi Pendaftaran Tugas Akhir Teknik Informatika)</span>
      <p>
        Merupakan aplikasi pembenahan pengelolaan administrasi yang mengedepankan integrasi dan digitalisasi
      </p>
      <router-link to="/"><button type="button">LOGIN</button></router-link>
    </div>
  </div>
</template>

<style>
/* Halaman About */
.about-container {
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-content {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 70px;
  box-shadow: 0 6px 9px rgb(150, 147, 156);
  max-width: 900px; /* Atur lebar maksimal sesuai kebutuhan Anda */
  width: 800%; /* Agar div dapat mengambil lebar maksimal yang tersedia */
  text-align: left;
  margin-right: -100px;
}

.about-content h1 {
  font-size: 80px;
  margin-bottom: 10px;
}

.about-content p {
  font-size: 20px;
  margin-bottom: 60px;
}

.about-content span {
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
}

.about-content button {
  background-color: #13011f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.about-content button:hover {
  background-color: #0a044f;
}
</style>
