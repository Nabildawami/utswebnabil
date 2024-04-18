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
        <h1>FORM PENDAFTARAN</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="jenis">Jenis Pendaftaran</label>
            <select v-model="jenisPendaftaran" id="jenis" name="jenisPendaftaran" required>
              <option value="Tugas Akhir">Tugas Akhir</option>
              <option value="Skripsi">Skripsi</option>
              <option value="Thesis">Thesis</option>
            </select>
          </div>
          <div class="form-group">
            <label for="nama">Nama Mahasiswa</label>
            <input type="text" v-model="namaMahasiswa" id="nama" name="namaMahasiswa" required>
          </div>
          <div class="form-group">
            <label for="email">Email Mahasiswa</label>
            <input type="email" v-model="emailMahasiswa" id="email" name="emailMahasiswa" required>
          </div>
          <div class="form-group">
            <label for="nim">Nim</label>
            <input type="text" v-model="nim" id="nim" name="nim" required>
          </div>
          <div class="form-group">
            <label for="judul">Judul Tugas Akhir</label>
            <input type="text" v-model="judulTugasAkhir" id="judul" name="judulTugasAkhir" required>
          </div>
          <div class="form-group">
            <label for="kategori">Kategori Tugas Akhir</label>
            <input type="text" v-model="kategoriTugasAkhir" id="kategori" name="kategoriTugasAkhir" required>
          </div>
          <div class="form-group">
            <label for="dosen1">Calon Dosen Pembimbing 1</label>
            <input type="text" v-model="dosenPembimbing1" id="dosen1" name="dosenPembimbing1" required>
          </div>
          <div class="form-group">
            <label for="dosen2">Calon Dosen Pembimbing 2</label>
            <input type="text" v-model="dosenPembimbing2" id="dosen2" name="dosenPembimbing2" required>
          </div>
          <div class="form-group">
            <label for="berkas">Upload Berkas</label>
            <input type="file" id="berkas" @change="handleFileUpload" name="berkas" required>
          </div>
          <button type="submit">Kirim</button>
          <button type="button" @click="cancel">Batal</button>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormPendaftaran',
    data() {
      return {
        jenisPendaftaran: '',
        namaMahasiswa: '',
        emailMahasiswa: '',
        nim: '',
        judulTugasAkhir: '',
        kategoriTugasAkhir: '',
        dosenPembimbing1: '',
        dosenPembimbing2: '',
        file: null
      };
    },
    methods: {
      logout() {
        // Navigasi kembali ke halaman home ("/home")
        this.$router.push('/');
      },
      submitForm() {
        // Lakukan logika untuk menyimpan data pendaftaran
        const formData = {
          jenisPendaftaran: this.jenisPendaftaran,
          namaMahasiswa: this.namaMahasiswa,
          emailMahasiswa: this.emailMahasiswa,
          nim: this.nim,
          judulTugasAkhir: this.judulTugasAkhir,
          kategoriTugasAkhir: this.kategoriTugasAkhir,
          dosenPembimbing1: this.dosenPembimbing1,
          dosenPembimbing2: this.dosenPembimbing2,
          file: this.file
        };
        console.log(formData);
        // Lakukan pengiriman data ke backend atau tempat penyimpanan data lainnya
        
        // Mengarahkan kembali ke halaman pendaftaran.vue setelah pengiriman berhasil
        this.$router.push('/pendaftaran');
        
        // Memanggil method tambahEntriBaru untuk menambahkan data baru ke daftar entri pada halaman pendaftaran.vue
        this.$root.$emit('tambahEntriBaru', formData);
      },
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
      cancel() {
        // Lakukan logika untuk membatalkan pendaftaran
      }
    }
  };
  </script>
  
  <style scoped>
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
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  select,
  input[type="file"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #5c54a4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  button[type="submit"] {
    background-color: #4caf50;
  }
  
  button[type="submit"]:hover,
  button[type="button"]:hover {
    background-color: #45a049;
  }
  
  button[type="button"] {
    background-color: #f44336;
  }
  </style>
  