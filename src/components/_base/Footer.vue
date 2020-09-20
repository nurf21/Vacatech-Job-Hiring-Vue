<template>
  <b-row class="footer">
    <b-col class="text-left">
      <b-row class="brand">
        <b-col>
          <b-img :src="require('../../assets/logo/vacatechwhite.png')"></b-img>
        </b-col>
      </b-row>
      <b-row class="description">
        <b-col md="5">
          <p>Vacatech bertekad untuk menghubungkan para talent dan perekrut untuk perubahan revolusi 4.0.</p>
        </b-col>
      </b-row>
      <b-row class="line">
        <b-col md="12">
          <hr />
        </b-col>
      </b-row>
      <b-row class="contact">
        <b-col md="4">
          <p>© 2020 Vacantech. All right reserved</p>
        </b-col>
        <b-col md="2" offset-md="3" class="text-right">
          <p>Telepon <br> 08772248740</p>
        </b-col>
        <b-col md="3" class="text-right">
          <p>Email <br> vacatechsolution@gmail.com</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style scoped>
.footer {
  padding: 4em 6em 2em 6em;
  background-color: #5e50a1;
}

.footer .description {
  padding: 2em 0em 4em 0em;
}

.footer p {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #ffffff;
}

.footer hr {
  border: 1px solid white;
}

.footer img {
  width: 178px;
  height: 50px;
  left: 150px;
  top: 2041px;
}
</style>

<script>
export default {
  name: 'Footer'
}
</script>
