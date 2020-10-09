<template>
  <div class="lp-container">
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
              Vacatech adalah sebuah platform yang menghubungkan para perekrut dan talenta.
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <router-link to="/register/recruiter">
              <b-button class="b-button-mc">Mulai Dari Sekarang</b-button>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6" class="text-center">
        <b-img class="ill" v-bind="styleImg1" :src="require('../assets/img/img04.png')"></b-img>
      </b-col>
    </b-row>

    <b-row class="main-content-2">
      <b-col md="6">
        <b-img class="ill" v-bind="styleImg2" :src="require('../assets/img/img02.png')"></b-img>
      </b-col>
      <b-col md="6">
        <b-row>
          <b-col>
            <h1>Kenapa harus mencari talent di Vacatech</h1>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-row>
              <b-col md="1">
                <b-img class="icon" :src="require('../assets/icon/tick.png')"></b-img>
              </b-col>
              <b-col>
                <p>Tidak dipungut biaya.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="1">
                <b-img class="icon" :src="require('../assets/icon/tick.png')"></b-img>
              </b-col>
              <b-col>
                <p>Developer berbakat di berbagai bidang keahlian.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="1">
                <b-img class="icon" :src="require('../assets/icon/tick.png')"></b-img>
              </b-col>
              <b-col>
                <p>Skill talent yang up-to-date.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="1">
                <b-img class="icon" :src="require('../assets/icon/tick.png')"></b-img>
              </b-col>
              <b-col>
                <p>Kirim pesan langsung kepada talent.</p>
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
              Berbagai macam bahasa pemrograman dah skill lainnya
            </p>
          </b-col>
        </b-row>
        <div>
          <b-row>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img class="icon" :src="require('../assets/icon/tick-warning.png')"></b-img>
                </b-col>
                <b-col>
                  <p>Java</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img class="icon" :src="require('../assets/icon/tick-warning.png')"></b-img>
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
                  <b-img class="icon" :src="require('../assets/icon/tick-warning.png')"></b-img>
                </b-col>
                <b-col>
                  <p>Kotlin</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img class="icon" :src="require('../assets/icon/tick-warning.png')"></b-img>
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
                  <b-img class="icon" :src="require('../assets/icon/tick-warning.png')"></b-img>
                </b-col>
                <b-col>
                  <p>PHP</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img class="icon" :src="require('../assets/icon/tick-warning.png')"></b-img>
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
                  <b-img class="icon" :src="require('../assets/icon/tick-warning.png')"></b-img>
                </b-col>
                <b-col>
                  <p>JavaScript</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col md="1">
                  <b-img class="icon" :src="require('../assets/icon/tick-warning.png')"></b-img>
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
        <b-img class="ill" v-bind="styleImg3" :src="require('../assets/img/img03.png')"></b-img>
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
        <h1>Sudah siap untuk berkarir?</h1>
      </b-col>
      <b-col md="4" offset-md="4" align-self="center" class="text-right">
        <router-link to="/register/recruiter">
          <b-button class="b-button-sn">Mulai Dari Sekarang</b-button>
        </router-link>
      </b-col>
    </b-row>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.lp-container {
  overflow-x: hidden;
}

.main-content-1 {
  padding: 8em;
}

.main-content-2, .main-content-3 {
  padding: 5em 8em;
}

.main-content-1 h1, .main-content-2 h1, .main-content-3 h1 {
  font-weight: 600;
  font-size: 2.75rem;
  line-height: 4rem;
  color: #1f2a36;
  letter-spacing: 0.1rem;
}

.main-content-1 p, .main-content-2 p, .main-content-3 p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #46505c;
}

.main-content-1 .b-button-mc {
  background-color: #5e50a1;
  border: transparent;
  color: white;
  padding: 15px 10px;
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
  font-weight: 600;
  background-color: white;
  color: #796eaf;
  padding: 15px 10px;
}

@media screen and (max-width: 768px) {
  .main-content-1, .main-content-2, .main-content-3 {
    padding: 4em;
  }

  .their-opinion {
    padding: 3em 2em;
    margin: 2em 0em;
  }

  .main-content-1 h1, .main-content-2 h1, .main-content-3 h1, .their-opinion h1 {
    font-size: 2rem;
    line-height: 2.3rem;
  }

  .main-content-1 p, .main-content-2 p, .main-content-3 p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .col-md-6 img.ill {
    width: 300px;
    height: 300px;
  }

  .col-md-6 img.icon {
    width: 20px;
    height: 20px;
  }

  .card-carousel {
    padding: 1em 0em;
  }

  .start-now {
    padding: 3em 4em;
    margin: 5em 2em;
  }

  .start-now h1 {
    font-size: 2rem;
    line-height: 3rem;
  }

  .start-now .b-button-sn {
    padding: 10px 5px;
  }
}
</style>

<script>
import Navbar from '../components/_base/Navbar'
import CardCarousel from '../components/_base/CardCarousel'
import Footer from '../components/_base/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    CardCarousel,
    Footer
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
