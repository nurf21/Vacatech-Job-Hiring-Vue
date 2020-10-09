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
          <p>Vacatech bertekad untuk membantu para developer mendapatkan pekerjaan sesuai keahliannya dan membantu perushaan yang sedang mencari developer yang berbakat.</p>
        </b-col>
      </b-row>
      <b-row class="line">
        <b-col md="12">
          <hr />
        </b-col>
      </b-row>
      <b-row class="contact">
        <b-col md="4">
          <p>© 2020 Vacatech. All right reserved</p>
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

@media screen and (max-width: 768px){
  .footer {
    padding: 4em 4em 2em 4em;
  }

  .col-md-5 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row .description {
    padding: 3em 0em 2em 0em;
  }

  .offset-md-3 {
    margin-left: 20%;
  }

  .contact p {
    font-size: 14px;
  }
}

@media screen and (max-width: 425px) {
  .footer img {
    width: 150px;
    height: 40px;
  }

  .footer p {
    font-size: 1rem;
    line-height: 1.8rem;
  }
}

@media screen and (max-width: 320px) {
  .footer {
    padding: 2em;
  }
}
</style>

<script>
export default {
  name: 'Footer'
}
</script>
