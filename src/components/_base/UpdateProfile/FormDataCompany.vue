<template>
  <b-row class="f-form">
    <b-col md="12">
      <b-card border-variant="white" class="text-center">
        <b-card-header header-bg-variant="white" class="text-left">
          <p>Data Diri</p>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="name" class="l-label">Nama Perusahaan</label>
                <b-input type="text" id="name" placeholder="Masukan nama perusahaan" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="bidang" class="l-label">Bidang</label>
                <b-input
                  type="text"
                  id="bidang"
                  placeholder="Masukan bidang perusahaan ex: financial"
                  required
                ></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="city" class="l-label">Kota</label>
                <b-input type="text" id="city" placeholder="Masukan kata" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="place" class="l-label">Tempat Kerja</label>
                <b-input type="text" id="place" placeholder="Masukan tempat kerja" required></b-input>
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
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="email" class="l-label">Email</label>
                <b-input type="text" id="email" placeholder="Masukan email" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="instagram" class="l-label">Instagram</label>
                <b-input type="text" id="instagram" placeholder="Masukan nama instagram" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="phone" class="l-label">Nomor Telepon</label>
                <b-input type="text" id="phone" placeholder="Masukan nomor telepon" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="linkedin" class="l-label">Linkedin</label>
                <b-input type="text" id="linkedin" placeholder="Masukan nama Linkedin" required></b-input>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
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
</style>

<script>
export default {
  name: 'FormDataDiri'
}
</script>
