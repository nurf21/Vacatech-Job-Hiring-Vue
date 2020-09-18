<template>
  <div style="width:100%; background-color: #E5E5E5;">
    <Header
      class="py-4"
      style="background-color: white; box-shadow: 0px 10px 50px rgba(132, 132, 132, 0.25);"
    />
    <div class="page-container">
      <div class="profile-info">
        <div class="image"></div>
        <div style="padding:0 30px">
          <h4>Louis Tomlinson</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci.</p>
          <p>Purwokerto, Jawa Tengah</p>
          <p
            style="color: #9EA0A5;"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
          <h4>Skill</h4>
          <div class="skills">
            <div class="skill">Phyton</div>
            <div class="skill">Laravek</div>
            <div class="skill">Golang</div>
            <div class="skill">Javascript</div>
            <div class="skill">PHP</div>
            <div class="skill">HTML</div>
            <div class="skill">C++</div>
            <div class="skill">Kotlin</div>
            <div class="skill">Swift</div>
          </div>
        </div>
      </div>
      <div class="hire-info">
        <h2>Hubungi Lous Tomlinson</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <br />
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              style="color: #9EA0A5;"
              id="input-group-3"
              label="Tujuan tentang pesan ini"
              label-for="input-3"
            >
              <b-form-select style="color: #9EA0A5;" id="input-3" :options="foods" required></b-form-select>
            </b-form-group>
            <b-form-group
              style="color: #9EA0A5;"
              id="input-group-2"
              label="Nama Lengkap"
              label-for="input-2"
            >
              <b-form-input
                style="color: #9EA0A5;"
                id="input-2"
                v-model="form.user_name"
                required
                placeholder="Masukan nama lengkap"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              style="color: #9EA0A5;"
              id="input-group-1"
              label="Email"
              label-for="input-1"
            >
              <b-form-input
                style="color: #9EA0A5;"
                id="input-1"
                v-model="form.user_mail"
                type="email"
                required
                placeholder="Masukan email"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              style="color: #9EA0A5;"
              id="input-group-2"
              label="No Handpone"
              label-for="input-2"
            >
              <b-form-input
                style="color: #9EA0A5;"
                id="input-2"
                v-model="form.user_phone"
                required
                placeholder="Masukan no handpone"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              style="color: #9EA0A5;"
              id="input-group-2"
              label="Deskripsi"
              label-for="textarea"
            >
              <b-form-textarea
                style="color: #9EA0A5;"
                id="textarea"
                v-model="text"
                placeholder="Deskripsikan/Jelaskan lebih detail"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <b-button block class="mt-5 btn-hire">Hire</b-button>
          </b-form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/HeaderLogin'
import Footer from '../components/Footer'
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        checked: []
      },
      foods: [{ text: 'Project', value: null }],
      show: true
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.btn-hire {
  background-color: #fbb017;
  border-color: #fbb017;
}
.btn-hire:hover {
  background-color: #fbb017;
  border-color: #fbb017;
  color: #111;
}
.page-container {
  display: grid;
  margin: 70px auto;
  width: 85%;
  grid-template-columns: 1fr 1fr;
}
.profile-info {
  width: 400px;
  height: 700px;
  border-radius: 8px;
  background-color: white;
}
.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: black;
  margin: 30px auto;
}
.hire-info {
  width: 700px;
  height: 1000px;
  border-radius: 8px;
}
/* Skills */
.skills {
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: 300px;
}
.skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  border-radius: 4px;
  text-align: center;
  padding: 3px 15px;
  color: white;
  margin: 0 5px 5px 0px;
}
@media (max-width: 700px) {
  .page-container {
    grid-template-columns: 1fr;
  }
  .profile-info {
    width: 375px;
  }
  .hire-info {
    margin-top: 50px;
    width: 375px;
    margin-bottom: -250px;
  }
}
</style>
