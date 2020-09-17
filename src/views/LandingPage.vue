<template>
  <b-container fluid>
    <Navbar />

    <b-row align-v="center">
      <b-col md="6" class="main-content-1">
        <b-row>
          <b-col>
            <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <router-link to="/register/recruiter">
              <b-button class="b-button-mc" size="lg"
                >Mulai Dari Sekarang</b-button
              >
            </router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6" class="text-center">
        <b-img
          v-bind="styleImg1"
          :src="require('../assets/img/img01.jpg')"
        ></b-img>
      </b-col>
    </b-row>

    <b-row class="main-content-2">
      <b-col md="6">
        <b-img
          v-bind="styleImg2"
          :src="require('../assets/img/img02.jpg')"
        ></b-img>
      </b-col>
      <b-col md="6">
        <b-row>
          <b-col>
            <h1>Kenapa harus mencari tallent di peworld</h1>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-row>
              <b-col md="1">
                <b-img :src="require('../assets/icon/tick.png')"></b-img>
              </b-col>
              <b-col>
                <p>Lorem ipsum dolor sit amet.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="1">
                <b-img :src="require('../assets/icon/tick.png')"></b-img>
              </b-col>
              <b-col>
                <p>Lorem ipsum dolor sit amet.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="1">
                <b-img :src="require('../assets/icon/tick.png')"></b-img>
              </b-col>
              <b-col>
                <p>Lorem ipsum dolor sit amet.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="1">
                <b-img :src="require('../assets/icon/tick.png')"></b-img>
              </b-col>
              <b-col>
                <p>Lorem ipsum dolor sit amet.</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="main-content-3">
      <b-col md="6">
        <b-row>
          <b-col>
            <h1>Skill Talent</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </b-col>
        </b-row>
        <div>
          <b-row>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img
                    :src="require('../assets/icon/tick-warning.png')"
                  ></b-img>
                </b-col>
                <b-col>
                  <p>Java</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img
                    :src="require('../assets/icon/tick-warning.png')"
                  ></b-img>
                </b-col>
                <b-col>
                  <p>Golang</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img
                    :src="require('../assets/icon/tick-warning.png')"
                  ></b-img>
                </b-col>
                <b-col>
                  <p>Kotlin</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img
                    :src="require('../assets/icon/tick-warning.png')"
                  ></b-img>
                </b-col>
                <b-col>
                  <p>C++</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img
                    :src="require('../assets/icon/tick-warning.png')"
                  ></b-img>
                </b-col>
                <b-col>
                  <p>PHP</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img
                    :src="require('../assets/icon/tick-warning.png')"
                  ></b-img>
                </b-col>
                <b-col>
                  <p>Ruby</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img
                    :src="require('../assets/icon/tick-warning.png')"
                  ></b-img>
                </b-col>
                <b-col>
                  <p>JavaScript</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img
                    :src="require('../assets/icon/tick-warning.png')"
                  ></b-img>
                </b-col>
                <b-col>
                  <p>10+ Bahasa Lainnya</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="6" class="text-center">
        <b-img
          v-bind="styleImg3"
          :src="require('../assets/img/img03.jpg')"
        ></b-img>
      </b-col>
    </b-row>

    <b-row class="their-opinion">
      <b-col md="12" class="text-center">
        <h1>Their opinion about peworld</h1>
      </b-col>
      <b-col md="12" class="card-carousel">
        <CardCarousel />
      </b-col>
    </b-row>

    <b-row class="start-now">
      <b-col md="4">
        <h1>Lorem ipsum dolor sit amet</h1>
      </b-col>
      <b-col md="4" offset-md="4" align-self="center" class="text-right">
        <router-link to="/register/recruiter">
          <b-button class="b-button-sn" size="lg">Mulai Dari Sekarang</b-button>
        </router-link>
      </b-col>
    </b-row>

    <b-row class="footer">
      <b-col class="text-left">
        <b-row class="brand">
          <b-col md="4">
            <b-img :src="require('../assets/logo/light.png')"></b-img>
          </b-col>
        </b-row>
        <b-row class="description">
          <b-col md="4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
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
  </b-container>
</template>

<style scoped>
.main-content-1 {
  padding: 8em 3em;
}

.main-content-1 h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 2.75rem;
  line-height: 4rem;
  color: #1f2a36;
  letter-spacing: 0.1rem;
}

.main-content-1 p {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #46505c;
}

.main-content-1 .b-button-mc {
  background-color: #5e50a1;
  border: transparent;
  color: white;
}

.main-content-2 {
  padding: 5em 3em;
}

.main-content-2 h1 {
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 3.5rem;
  color: #1f2a36;
}

.main-content-3 {
  padding: 5em 3em;
}

.main-content-3 h1 {
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 3.5rem;
  color: #1f2a36;
}

.main-content-3 p {
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #46505c;
}

.their-opinion {
  padding: 5em 3em;
  margin: 4.68em 0em;
  background-color: #e5e5e5;
}

.card-carousel {
  padding: 3.25em 0em;
}

.start-now {
  background-color: #5e50a1;
  border-radius: 40px 8px;
  padding: 3.625em 4.25em;
  margin: 9em 9em;
}

.start-now h1 {
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 3.5rem;
  color: white;
}

.start-now .b-button-sn {
  background-color: white;
  color: #796eaf;
}

.footer {
  margin: 7.5em 0em 0em 0em;
  padding: 4.375em 9em 2.6265em 9em;
  background-color: #5e50a1;
}

.footer .description {
  padding: 1.875em 0em 4em 0em;
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
import Navbar from '../components/_base/Navbar'
import CardCarousel from '../components/_base/CardCarousel'

export default {
  name: 'Home',
  components: {
    Navbar,
    CardCarousel
  },
  data() {
    return {
      styleImg1: { width: 400, height: 400 },
      styleImg2: { width: 396, height: 289 },
      styleImg3: { width: 396, height: 289 }
    }
  }
}
</script>
