<template>
  <b-row class="contact" cols="4">
    <b-col md="12" sm="12" class="text-center title">
      <h1>Social Media</h1>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/mail.png')"></b-img>
          <p>Louistommo@gmail.com</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/instagram.png')"></b-img>
          <p>@Louist91</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/github.png')"></b-img>
          <p>@louistommo</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/gitlab.png')"></b-img>
          <p>@louistommo</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style scoped>
.contact {
  padding: 2.75em 0em;
}

.contact h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}
</style>

<script>
export default {
  name: 'UserContact'
}
</script>
