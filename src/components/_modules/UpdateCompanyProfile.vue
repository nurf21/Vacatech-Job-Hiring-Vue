<template>
  <div class="up-container">
    <Navbar class="nav" />

    <div class="content">
      <b-row class="main-content">
        <b-col class="main-profile" md="4">
          <b-row>
            <b-col md="12">
              <b-card border-variant="white" class="text-center">
                <b-img
                  :src="require('../../assets/profile/louis.jpg')"
                  rounded="circle"
                  style="width: 150px; height: 150px; object-fit: cover;"
                ></b-img>
                <div class="edit-icon">
                  <p>
                    Edit
                    <b-icon icon="pencil-fill"></b-icon>
                  </p>
                </div>
                <div class="text-left">
                  <b-card-text class="name">Louis Tomlinson</b-card-text>
                  <b-card-text class="job">Web Developer</b-card-text>
                  <b-card-text class="location">Location</b-card-text>
                  <b-card-text class="role">Freelancer</b-card-text>
                </div>
              </b-card>
            </b-col>
            <b-col md="12" sm="12" class="b-button-container">
              <b-button block size="md" class="b-button-save">Simpan</b-button>
            </b-col>
            <b-col md="12" sm="12" class="b-button-container">
              <b-button block size="md" class="b-button-cancel">Batal</b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="edit-profile" md="8">
          <DataPerusahaan />
        </b-col>
      </b-row>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.up-container {
  overflow-x: hidden;
}

.nav {
  box-shadow: none;
}

.content {
  padding: 2em 7em;
  background: linear-gradient(to bottom, #5e50a1 50%, #f6f7f8 50%) no-repeat;
  background-size: 100% 30%;
  background-color: #f6f7f8;
}

.main-content {
  margin: 4.3em 0em;
}

.edit-icon p {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #9ea0a5;
}

.main-profile .name {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.main-profile .job {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #1f2a36;
}

.main-profile .location {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #9ea0a5;
}

.main-profile .role {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #9ea0a5;
}
.main-profile .b-button-container .b-button-save {
  margin: 1em 0em;
  border: transparent;
  background-color: #5e50a1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}

.main-profile .b-button-container .b-button-cancel {
  border: 1px solid #5e50a1;
  background-color: white;
  color: #5e50a1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
}
</style>

<script>
import Navbar from '../_base/NavigationBar'
import Footer from '../_base/Footer'
import DataPerusahaan from '../_base/UpdateProfile/FormDataCompany'

export default {
  name: 'UpdateProfile',
  components: {
    Navbar,
    Footer,
    DataPerusahaan
  }
}
</script>
