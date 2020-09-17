<template>
  <b-container>
    <b-row>
      <b-col class="text-left">
        <h3>Halo, Teman Vaca!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
      </b-col>
    </b-row>
    <b-row class="login-form">
      <b-col>
        <b-form @submit.prevent="onSubmit">
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="name">Nama</label>
              <b-input type="text" id="name" v-model="form.user_name"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="email">Email</label>
              <b-input type="email" id="email" v-model="form.user_email"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="company">Perusahaan</label>
              <b-input type="text" id="company" v-model="form.company_name"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="jabatan">Jabatan</label>
              <b-input type="text" id="jabatan" v-model="form.company_depart"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="handphone">No handphone</label>
              <b-input type="text" id="handphone" v-model="form.user_phone"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="password">Kata sandi</label>
              <b-input type="password" id="password" v-model="form.user_password"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="confirmpassword">Konfirmasi kata sandi</label>
              <b-input type="password" id="confirmpassword" v-model="form.confirm_password"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-right">
              <p>Lupa kata sandi?</p>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col>
              <b-button
                type="submit"
                block
                style="background-color: #FBB017; border-color: transparent;"
              >Daftar</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <p>
          Anda sudah punya akun?
          <span style="color: #FBB017">Masuk disini</span>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
p {
  margin: 0;
}

.login-form {
  padding: 3vh 0vw;
}

.component-form {
  padding: 1.8vh 0vw;
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormLogin',
  data() {
    return {
      form: {}
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      const payload = {
        form: this.form,
        role: 'recruiter'
      }
      console.log(this.form)
      this.register(payload)
        .then((result) => {
          this.$router.push('/login')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
