<template>
  <b-row class="f-form">
    <b-col md="12">
      <b-card border-variant="white" class="text-center">
        <b-card-header header-bg-variant="white" class="text-left">
          <p>Pengalaman Kerja</p>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="position" class="l-label">Posisi</label>
                <b-input type="text" id="position" placeholder="web developer" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="company" class="l-label">Nama perusahaan</label>
                <b-input type="text" id="company" placeholder="PT Harus bisa" required></b-input>
              </b-col>
              <b-col class="text-left">
                <label for="date" class="l-label">Job Desk</label>
                <b-input type="text" id="date" placeholder="Januari 2018" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="description" class="l-label">Deskripsi Singkat</label>
                <b-form-textarea
                  type="text"
                  rows="4"
                  id="description"
                  placeholder="Tuliskan deskripsi singkat"
                  required
                ></b-form-textarea>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
        <b-card-footer footer-bg-variant="white">
          <b-button block size="lg" class="b-button-add">Tambah pengalaman kerja</b-button>
        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
</template>

<style scoped>
.f-form {
  margin: 0em 0em 3em 0em;
}

.f-form p {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.component-form {
  padding: 1.8vh 0vw;
}

.component-form .l-label {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #9ea0a5;
}

.b-button-add {
  border: 1px solid #fbb017;
  background-color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #fbb017;
}
</style>

<script>
export default {
  name: 'FormPengalamanKerja'
}
</script>
