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
              <img src="@/assets/download.png" alt="Profil Mahasiswa" style="width: 80px; height: 50;">
            </div>
            <h3>MAHASISWA</h3>
            <button type="button" @click="logout">LOGOUT</button>
          </div>
        </section>
      </aside>
  
      <!-- Main Content -->
      <main>
        <div class="container">
          <div class="content">
            <h1>STATUS PENDAFTARAN DITERIMA</h1>
            <div class="info">
              <p>Nama Mahasiswa     : {{ nama }}</p>
              <p>NIM Mahasiswa      : {{ nim }}</p>
              <p>Jenis Kelamin      : {{ jenisKelamin }}</p>
              <p>Judul Tugas Akhir  : {{ judul }}</p>
              <p>Status Berkas      : {{ status }}</p>
              <p>Kategori TA        : {{ kategoriTA }}</p>
              <p>Jenis TA           : {{ jenisTA }}</p>
              <p>Dosen Pembimbing 1 : {{ dosenPembimbing1 }}</p>
              <p>Dosen Pembimbing 2 : {{ dosenPembimbing2 }}</p>
              <p>Dosen Penguji 1    : {{ dosenPenguji1 }}</p>
              <p>Dosen Penguji 2    : {{ dosenPenguji2 }}</p>
            </div>
            <button @click="goBack">Kembali</button>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nama            : 'm.nabildawami',
        nim             : '12250111527',
        jenisKelamin    : 'Laki-laki',
        judul           : 'Adatatif apps',
        status          : 'Diterima',
        kategoriTA      : 'Laporan',
        jenisTA         : 'Individu',
        dosenPembimbing1: 'Fulan, S.T, M.T',
        dosenPembimbing2: 'Dr. Bijaksana, S.T, M.Kom',
        dosenPenguji1   : 'Fulana, M.Sc',
        dosenPenguji2   : 'Direkta, S.T, M.Kom'
      };
    },
    methods: {
      logout() {
        // Navigasi kembali ke halaman home ("/home")
        this.$router.push('/');
      },
      goBack() {
        // Kembali ke halaman sebelumnya
        this.$router.go(-1);
      }
    }
  };
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

/* Styling for class "info" */
.info {
  background-color: #ffffff; /* Warna latar belakang */
  padding: 20px; /* Padding untuk konten dalam kotak */
  border-radius: 8px; /* Menghasilkan sudut bulat */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Efek bayangan */
  margin-bottom: 20px; /* Jarak antara kotak info dengan elemen di bawahnya */
}

/* Titik dua sejajar */
.info p {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
