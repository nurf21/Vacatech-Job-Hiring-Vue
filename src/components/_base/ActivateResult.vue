<template>
  <b-container>
    <b-row>
      <b-col class="text-left">
        <h3>Selamat, akun anda berhasil diaktivasi!</h3>
        <p>
          Anda bisa login
          <router-link to="/login">
            <span style="color: #FBB017">disini</span>
          </router-link>
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
export default {
  name: 'ActivateResult'
}
</script>
