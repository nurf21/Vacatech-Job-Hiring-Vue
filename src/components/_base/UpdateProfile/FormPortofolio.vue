<template>
  <b-row class="f-form">
    <b-col md="12">
      <b-card border-variant="white" class="text-center">
        <b-card-header header-bg-variant="white" class="text-left">
          <p>Portofolio</p>
        </b-card-header>
        <b-card-body>
          <b-form @submit.prevent="onSubmit()">
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="name" class="l-label">Nama Aplikasi</label>
                <b-input type="text" id="name" v-model="form.portfolio_name" placeholder="Masukan nama aplikasi" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="link" class="l-label">Link repository</label>
                <b-input type="text" id="link" v-model="form.portfolio_link" placeholder="Masukan link repository" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="type" class="l-label">Type portofolio</label>
                <b-form-radio-group v-model="form.portfolio_type" :options="options" plain name="type"></b-form-radio-group>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="pict" class="l-label">Upload gambar</label>
                <b-form-file name="pict" @change="upFile" accept=".jpg, .png"></b-form-file>
              </b-col>
            </b-row>
            <b-button block type="submit" size="lg" class="b-button-add">Tambah portofolio</b-button>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FormPortofolio',
  data() {
    return {
      options: [
        { text: 'Aplikasi Mobile', value: 'Aplikasi Mobile' },
        { text: 'Aplikasi Web', value: 'Aplikasi Web' }
      ],
      form: {}
    }
  },
  methods: {
    ...mapActions(['getTalentDataById', 'postPortfolio']),
    upFile(event) {
      this.form.portfolio_img = event.target.files[0]
    },
    onSubmit() {
      const data = new FormData()
      data.append('user_id', this.form.user_id)
      data.append('portfolio_name', this.form.portfolio_name)
      data.append('portfolio_link', this.form.portfolio_link)
      data.append('portfolio_type', this.form.portfolio_type)
      data.append('portfolio_img', this.form.portfolio_img)
      this.postPortfolio(data)
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser', talentData: 'getTalentData' })
  },
  created() {
    this.form = {
      user_id: this.user.user_id
    }
  }
}
</script>
