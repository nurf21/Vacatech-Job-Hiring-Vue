<template>
  <b-row class="f-form">
    <b-col md="12">
      <b-card border-variant="white" class="text-center">
        <b-card-header header-bg-variant="white" class="text-left">
          <p>Pengalaman Kerja</p>
        </b-card-header>
        <b-card-body>
          <b-form @submit.prevent="onSubmit()">
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="position" class="l-label">Posisi</label>
                <b-input type="text" v-model="form.exp_position" id="position" placeholder="Web Developer" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="company" class="l-label">Nama perusahaan</label>
                <b-input type="text" v-model="form.exp_company" id="company" placeholder="PT Harus bisa" required></b-input>
              </b-col>
              <b-col class="text-left">
                <label for="date" class="l-label">Job Date</label>
                <b-input type="text" v-model="form.exp_date" id="date" placeholder="Januari 2018" required></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="description" class="l-label">Deskripsi Singkat</label>
                <b-form-textarea
                  type="text"
                  v-model="form.exp_desc"
                  rows="4"
                  id="description"
                  placeholder="Tuliskan deskripsi singkat"
                  required
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-button block size="lg" class="b-button-add" type="submit">Tambah pengalaman kerja</b-button>
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
  name: 'FormPengalamanKerja',
  data() {
    return {
      form: {}
    }
  },
  methods: {
    ...mapActions(['getTalentDataById', 'postExp']),
    onSubmit() {
      this.postExp(this.form)
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
