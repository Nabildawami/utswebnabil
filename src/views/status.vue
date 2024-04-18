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
        <div class="registration-view">
          <header>
            <h1>DATA PENDAFTARAN</h1>
          </header>
  
          <!-- Tabel Status Pendaftaran -->
          <table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Judul</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in entries" :key="index">
                <td>{{ entry.tanggal }}</td>
                <td>{{ entry.judul }}</td>
                <td>{{ entry.status }}</td>
                <td><router-link :to="{ name: entry.name, params: { id: entry.id }}">Detail</router-link></td>
            </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        entries: [
          {
            id: 1,
            tanggal: '2023-04-05',
            judul: 'data mahasiswa apps',
            status: 'Menunggu',
            name: 'menunggu'
          },
          {
            id: 2,
            tanggal: '2024-08-05',
            judul: 'hapalan web',
            status: 'Ditolak',
            name: 'ditolak'
          },
          {
            id: 2,
            tanggal: '2024-11-05',
            judul: 'adatatif web',
            status: 'Diterima',
            name: 'diterima'
          },
        ]
      };
    },
    methods: {
      // Fungsi logout untuk menangani klik tombol logout
      logout() {
        // Navigasi kembali ke halaman home ("/home")
        this.$router.push('/');
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
 /* Main Content */
main {
  flex: 1;
  padding-left: 20px;
}

.registration-view header {
  text-align: left; /* Menata judul ke kiri */
  margin-bottom: 20px;
}

.registration-view table {
  width: 100%;
  border-collapse: collapse;
  text-align: left; /* Menata seluruh teks dalam tabel ke kiri */
}

.registration-view table thead th {
  background-color: #eee; /* Warna background untuk header tabel */
}

.registration-view table th,
.registration-view table td {
  padding: 15px;
  border: 1px solid #ddd; /* Warna border tabel */
}

.registration-view table tbody tr:nth-child(odd) {
  background-color: #f9f9f9; /* Warna selang-seling baris tabel */
}

  </style>
  