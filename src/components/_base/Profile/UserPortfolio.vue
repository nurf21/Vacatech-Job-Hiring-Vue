<template>
  <b-row>
    <b-col md="12" sm="12">
      <b-tabs content-class="mt-3">
        <b-tab title="Portofolio" active>
          <div class="p-container">
            <b-row>
              <b-col v-for="(value, index) in talentData[0].portfolio" :key="index">
                <b-img :src="url + '/' + value.portfolio_img"></b-img>
                <a :href="value.portfolio_link">
                  <p>{{ value.portfolio_name }}</p>
                </a>
              </b-col>
            </b-row>
          </div>
        </b-tab>
        <b-tab title="Pengalaman Kerja">
          <b-row>
            <b-col md="8">
              <b-row v-for="(value, index) in talentData[0].experience" :key="index">
                <b-col md="12" class="job"><p>{{value.exp_position}}</p></b-col>
                <b-col md="12" class="company"><p>{{value.exp_company}}</p></b-col>
                <b-col md="4" class="date"
                  ><p>{{value.exp_date}}</p></b-col
                >
                <b-col md="4"></b-col>
                <b-col md="12" class="tasks">
                  <p>{{value.exp_desc}}</p>
                </b-col>
                <b-col md="12"><hr /></b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-col>
  </b-row>
</template>

<style scoped>
.p-container {
  display: flex;
  justify-content: flex-start;
  text-align: center;
}

.p-container img {
  width: 16vw;
  height: 22vh;
  border-radius: 4px;
}

.job p {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #1f2a36;
}

.company p {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #46505c;
}

.date p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #9ea0a5;
}

.lamanya p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #9ea0a5;
}

.tasks p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #1f2a36;
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserPortfolio',
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL
    }
  },
  computed: {
    ...mapGetters({ talentData: 'getTalentData' })
  }
}
</script>
