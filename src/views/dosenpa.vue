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
        <!-- Data Dosen Pembimbing -->
        <div class="dosen-list">
          <h2>Data Dosen Pembimbing</h2>
          <input type="text" v-model="searchQuery" placeholder="Cari dosen...">

          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Dosen</th>
                <th>NIDN</th>
                <th>Jenis Kelamin</th>
                <th>Keahlian</th>
                <th>Kuota</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dosen, index) in dosenList" :key="dosen.Nidn">
                <td>{{ index + 1 }}</td>
                <td>{{ dosen.Nama }}</td>
                <td>{{ dosen.Nidn }}</td>
                <td>{{ dosen.JenisKelamin }}</td>
                <td>{{ dosen.Keahlian }}</td>
                <td>{{ dosen.Kuota }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        dosenList: [
          {
            No: 1,
            Nama: "Dosen 1",
            Nidn: 12223,
            JenisKelamin: "L",
            Keahlian: "Keahlian 1",
            Kuota: 5
          },
          {
            No: 2,
            Nama: "Dosen 2",
            Nidn: 2224,
            JenisKelamin: "L",
            Keahlian: "Keahlian 2",
            Kuota: 6
          },
          {
            No: 3,
            Nama: "Dosen 3",
            Nidn: 2225,
            JenisKelamin: "P",
            Keahlian: "Keahlian 3",
            Kuota: 7
          },
          {
            No: 4,
            Nama: "Dosen 4",
            Nidn: 2226,
            JenisKelamin: "P",
            Keahlian: "Keahlian 4",
            Kuota: 3
          },
          {
            No: 5,
            Nama: "Dosen 5",
            Nidn: 2227,
            JenisKelamin: "L",
            Keahlian: "Keahlian 5",
            Kuota: 4
          }
          ],
      searchQuery: '' // Properti untuk menyimpan nilai input pencarian
    };
  },
  computed: {
    // Komputed properti untuk menyaring data dosen berdasarkan input pencarian
    filteredDosenList() {
      return this.dosenList.filter(dosen => {
        return dosen.Nama.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
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
  main h2{
    text-align: center;
    font-size: 30px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table thead th {
    background-color: #eee; /* Warna background untuk header tabel */
  }
  
  table th,
  table td {
    padding: 15px;
    text-align: left;
    border: 1px solid #ddd; /* Warna border tabel */
  }
  
  table tbody tr:nth-child(odd) {
    background-color: #f9f9f9; /* Warna selang-seling baris tabel */
  }
  
  .dosen-list {
    margin-top: 20px;
  }
  
  th,
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  