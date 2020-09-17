<template>
  <b-row>
    <b-col md="12" sm="12">
      <b-tabs content-class="mt-3">
        <b-tab title="Portofolio" active>
          <div class="p-container">
            <b-row>
              <b-col
                ><b-img
                  :src="require('../../../assets/profile/porto.jpg')"
                ></b-img>
                <p>Project Name</p>
              </b-col>
            </b-row>
          </div>
        </b-tab>
        <b-tab title="Pengalaman Kerja">
          <b-row>
            <b-col md="4">
              <b-img
                :src="require('../../../assets/profile/porto.jpg')"
              ></b-img>
            </b-col>
            <b-col md="8">
              <b-row>
                <b-col md="12" class="job"><p>Engineer</p></b-col>
                <b-col md="12" class="company"><p>Tokopedia</p></b-col>
                <b-col md="4" class="date"
                  ><p>July 2019 - January 2020</p></b-col
                >
                <b-col md="4" class="lamanya"><p>6 months</p></b-col>
                <b-col md="4"></b-col>
                <b-col md="12" class="tasks"
                  ><p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p></b-col
                >
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
export default {
  name: 'UserPortfolio'
}
</script>
