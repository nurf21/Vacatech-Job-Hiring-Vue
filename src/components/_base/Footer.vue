<template>
  <b-row class="footer">
    <b-col class="text-left">
      <b-row class="brand">
        <b-col>
          <b-img :src="require('../../assets/logo/light.png')"></b-img>
        </b-col>
      </b-row>
      <b-row class="description">
        <b-col md="5">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ineuismod ipsum et dui rhoncus auctor.</p>
        </b-col>
      </b-row>
      <b-row class="line">
        <b-col md="12">
          <hr />
        </b-col>
      </b-row>
      <b-row class="contact">
        <b-col md="4">
          <p>2020 Pewworld. All right reserved</p>
        </b-col>
        <b-col md="2" offset-md="4" class="text-right">
          <p>Telepon</p>
        </b-col>
        <b-col md="2" class="text-right">
          <p>Email</p>
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
</style>

<script>
export default {
  name: 'Footer'
}
</script>
