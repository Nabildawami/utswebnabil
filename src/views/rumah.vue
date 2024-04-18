<template>
    <div class="container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <section class="titlepage">
          <div class="judul">
            <h1>ADATATIF</h1>
            <p>(Aplikasi Pendaftaran Tugas Akhir Teknik Informatika)</p>
          </div>
        </section>
        <section class="menu">
          <div class="navigasi">
            <nav>
              <ul>
              <li><router-link to="/rumah" exact :exact-active-class="activeClass">Home</router-link></li>
              <li><router-link to="/pendaftaran" exact :exact-active-class="activeClass">Daftar</router-link></li>
              <li><router-link to="/dosenpa" exact :exact-active-class="activeClass">Dosen Pa</router-link></li>
              <li><router-link to="/status" exact :exact-active-class="activeClass">Status</router-link></li>
            </ul>
            </nav>
          </div>
        </section>
        <section class="profil">
          <div class="judul">
            <div style="text-align: center;">
              <div style="text-align: center;">
              <img src="@/assets/download.png" alt="Profil Mahasiswa" style="width: 80px; height: 50;">
            </div>
            </div>
            <h3>MAHASISWA</h3>
            <button type="button" @click="logout">LOGOUT</button>
          </div>
        </section>
      </aside>
  
      <!-- Main Content -->
      <main>
        <div class="halaman">
          <h1>SELAMAT DATANG</h1>
        </div>
        <section class="about">
          <div class="container">
            <h2>ADATATIF</h2>
            <p>(Aplikasi Pendaftaran Tugas Akhir Teknik Informatika)</p>
            <p>Merupakan aplikasi pembenahan pengelolaan adminstrasi yang mengedepankan integrasi dan digitalisasi</p>
          </div>
        </section>
        <section class="latest-news">
          <h2>INFORMASI TERBARU</h2>
          <div class="container">
            <div class="news-item">
              <h3>Dosen Pendaftaran</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor mi ac risus auctor gravida. Quisque odio erat, pulvinar nec nulla ac, finibus pellentesque nulla. Nunc elementum, quam ac fermentum euismod, arcu erat scelerisque urna, vel feugiat dui ante a augue. Etiam volutpat eu ante eget facilisis. Vestibulum sed nibh dapibus mauris iaculis dapibus a et leo. Sed nunc leo, dictum at viverra vitae, molestie nec elit. Mauris</p>
            </div>
            <div class="news-item">
              <h3>Mahasiswa</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor mi ac risus auctor gravida. Quisque odio erat, pulvinar nec nulla ac, finibus pellentesque nulla. Nunc elementum, quam ac fermentum euismod, arcu erat scelerisque urna, vel feugiat dui ante a augue. Etiam volutpat eu ante eget facilisis. Vestibulum sed nibh dapibus mauris iaculis dapibus a et leo. Sed nunc leo, dictum at viverra vitae, molestie nec elit. Mauris</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
export default {
  name: 'HomePage',
  methods: {
    logout() {
      this.$router.push('/');
    }
    
  }
  
}
activeClass: 'active'
</script>
  
  <style scoped>
  /* Global Styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
  
  .container {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Sidebar */
  
  .sidebar {
    width: 300px;
    padding: 20px;
    background-color: #070130;
    box-shadow: 0 0 10px rgb(247, 244, 244);
  }
  
  .titlepage {
    margin-bottom: 30px;
  }
  
  .titlepage h1 {
    text-align: center;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .titlepage p {
    text-align: center;
    color: #ffffff;
    font-size: 14px;
  }
  
  .menu nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .menu nav ul li {
    margin-bottom: 10px;
  }
  
  .menu nav ul li a {
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
  }
  
  .profil {
    align-items: center;
    margin-top: 20px;
  }
  
  .profil h3 {
    text-align: center;
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #ff6347;
    color: #fff;
    border: none;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    margin: 0 auto 20px; /* Memberikan margin bawah pada tombol */
  }
  
  /* Main Content */
  main {
    flex: 1;
    padding-left: 20px;
  }
  
  .halaman h1 {
    text-align: center;
    font-size: 36px;
    color: #160030;
    margin-bottom: 20px;
  }
  
  .about p {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .latest-news h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center; /* Mengubah posisi teks menjadi tengah */
  }
  
  .news-item h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .news-item p {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
  }
  </style>
  