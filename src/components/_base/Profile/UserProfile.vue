<template>
  <b-row>
    <b-col>
      <b-row class="profile-image">
        <b-col>
          <b-img
            center
            :src="require('../../../assets/profile/louis.jpg')"
            style="width: 150px; height: 150px; object-fit: cover"
            rounded="circle"
          ></b-img>
        </b-col>
      </b-row>

      <b-row class="main-profile">
        <b-col md="12" sm="12" class="text-center title">
          <h1>Louis Tomlinson</h1>
        </b-col>
        <b-col md="12" sm="12" class="text-center role">
          <p>Web Developer</p>
        </b-col>
        <b-col md="12" sm="12" class="text-center location">
          <b-row class="justify-content-center">
            <b-col md="auto">
              <b-img :src="require('../../../assets/icon/pin.png')"></b-img>
            </b-col>
            <b-col md="auto" align-self="end">
              <p>Purwokerto, Jawa Tengah</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="12" sm="12" class="text-center roles">
          <p>Freelancer</p>
        </b-col>
        <b-col md="12" sm="12" class="text-center about">
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </b-col>
        <b-col md="4"></b-col>
        <b-col md="4" class="text-center hire">
          <b-button size="md" block class="b-button-hire">Hire</b-button>
        </b-col>
        <b-col md="4"></b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style scoped>
.main-profile .title h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.main-profile .role p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #1f2a36;
}

.main-profile .location p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #9ea0a5;
  margin: 0;
}

.main-profile .roles p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #9ea0a5;
  margin: 16px 0px;
}

.main-profile .about p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #9ea0a5;
}

.main-profile .hire .b-button-hire {
  color: white;
  background-color: #5e50a1;
}
</style>

<script>
export default {
  name: 'UserProfile'
}
</script>
