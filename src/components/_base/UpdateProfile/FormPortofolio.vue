<template>
  <b-row class="f-form">
    <b-col md="12">
      <b-card border-variant="white" class="text-center">
        <b-card-header header-bg-variant="white" class="text-left">
          <p>Portofolio</p>
        </b-card-header>
        <b-card-body>
          <b-form @submit.prevent="onSubmit()">
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="name" class="l-label">Nama Aplikasi</label>
                <b-input
                  type="text"
                  id="name"
                  v-model="form.portfolio_name"
                  placeholder="Masukan nama aplikasi"
                  required
                ></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="link" class="l-label">Link repository</label>
                <b-input
                  type="text"
                  id="link"
                  v-model="form.portfolio_link"
                  placeholder="Masukan link repository"
                  required
                ></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="type" class="l-label">Tipe portofolio</label>
                <b-form-radio-group
                  v-model="form.portfolio_type"
                  :options="options"
                  plain
                  name="type"
                ></b-form-radio-group>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="pict" class="l-label">Upload gambar</label>
                <b-form-file
                  name="pict"
                  @change="upFile"
                  accept=".jpg, .png"
                ></b-form-file>
              </b-col>
            </b-row>
            <b-button block type="submit" size="lg" class="b-button-add"
              >Tambah portofolio</b-button
            >
          </b-form>
          <b-row class="selected-skill">
            <b-col
              md="auto"
              style="padding: 0em 0.8em 0em 0em"
              v-for="(item, index) in portfolio"
              :key="index"
            >
              <b-button
                size="md"
                block
                class="b-button-skill"
                v-b-modal.modal-portfolio
                @click="onClick(item)"
              >
                {{ item.portfolio_name }}
              </b-button>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
    <b-modal id="modal-portfolio" title="Edit Portofolio" centered hide-footer>
      <b-form @submit.prevent="onUpdate()">
        <b-row class="component-form">
          <b-col class="text-left">
            <label for="name" class="l-label">Nama Aplikasi</label>
            <b-input
              type="text"
              id="name"
              v-model="formUpdate.portfolio_name"
              placeholder="Masukan nama aplikasi"
              required
            ></b-input>
          </b-col>
        </b-row>
        <b-row class="component-form">
          <b-col class="text-left">
            <label for="link" class="l-label">Link repository</label>
            <b-input
              type="text"
              id="link"
              v-model="formUpdate.portfolio_link"
              placeholder="Masukan link repository"
              required
            ></b-input>
          </b-col>
        </b-row>
        <b-row class="component-form">
          <b-col class="text-left">
            <label for="type" class="l-label">Tipe portofolio</label>
            <b-form-radio-group
              v-model="formUpdate.portfolio_type"
              :options="options"
              plain
              name="type"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="component-form">
          <b-col class="text-left">
            <label for="pict" class="l-label"
              >Ubah gambar (kosongkan jika tidak ingin mengubah gambar)</label
            >
            <b-form-file
              name="pict"
              @change="upFileUpdate"
              accept=".jpg, .png"
            ></b-form-file>
          </b-col>
        </b-row>
        <b-button block type="submit" size="lg" class="b-button-add"
          >Simpan</b-button
        >
        <b-button block size="lg" class="b-button-delete" @click="showDelBox()"
          >Hapus</b-button
        >
      </b-form>
    </b-modal>
  </b-row>
</template>

<style scoped>
.f-form {
  margin: 0em 0em 3em 0em;
}

.f-form p {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.component-form {
  padding: 1.8vh 0vw;
}

.component-form .l-label {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #9ea0a5;
}

.b-button-add {
  border: 1px solid #fbb017;
  background-color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #fbb017;
}

.b-button-delete {
  border: 1px solid rgba(250, 0, 0, 0.5);
  background-color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: rgba(250, 0, 0, 0.5);
}

.selected-skill {
  margin: 30px 0px;
}

.selected-skill .b-button-skill {
  color: white;
  background-color: #fdd074;
  border: 1px solid #fbb017;
  margin: 0.2em 0.2em;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FormPortofolio',
  data() {
    return {
      options: [
        { text: 'Aplikasi Mobile', value: 'Aplikasi Mobile' },
        { text: 'Aplikasi Web', value: 'Aplikasi Web' }
      ],
      form: {},
      formUpdate: {},
      portfolio: [],
      portfolioId: ''
    }
  },
  methods: {
    ...mapActions([
      'getTalentDataById',
      'postPortfolio',
      'patchPortfolio',
      'deletePortfolio'
    ]),
    upFile(event) {
      this.form.portfolio_img = event.target.files[0]
    },
    upFileUpdate(event) {
      this.formUpdate.portfolio_img = event.target.files[0]
    },
    onSubmit() {
      let data = new FormData()
      data.append('user_id', this.form.user_id)
      data.append('portfolio_name', this.form.portfolio_name)
      data.append('portfolio_link', this.form.portfolio_link)
      data.append('portfolio_type', this.form.portfolio_type)
      data.append('portfolio_img', this.form.portfolio_img)
      this.postPortfolio(data)
        .then((response) => {
          data = null
          this.form = {
            user_id: this.user.user_id,
            portfolio_name: null,
            portfolio_link: null,
            portfolio_type: null,
            portfolio_img: null
          }
          this.makeToast(response.msg, 'Success', 'success')
          this.getTalentDataById(this.user.user_id).then((response) => {
            this.portfolio = response.data[0].portfolio
          })
        })
        .catch((error) => {
          this.makeToast(error.data.msg, 'Error', 'danger')
        })
    },
    onClick(data) {
      this.portfolioId = data.portfolio_id
      this.formUpdate = {
        user_id: data.user_id,
        portfolio_name: data.portfolio_name,
        portfolio_link: data.portfolio_link,
        portfolio_type: data.portfolio_type
      }
    },
    onUpdate() {
      if (!this.formUpdate.portfolio_img) {
        const payload = {
          id: this.portfolioId,
          form: this.formUpdate
        }
        this.patchPortfolio(payload).then((response) => {
          this.$bvModal.hide('modal-portfolio')
          this.makeToast(response.msg, 'Success', 'success')
          this.getTalentDataById(this.user.user_id).then((response) => {
            this.portfolio = response.data[0].portfolio
          })
        })
      } else {
        let data = new FormData()
        data.append('user_id', this.formUpdate.user_id)
        data.append('portfolio_name', this.formUpdate.portfolio_name)
        data.append('portfolio_link', this.formUpdate.portfolio_link)
        data.append('portfolio_type', this.formUpdate.portfolio_type)
        data.append('portfolio_img', this.formUpdate.portfolio_img)
        const payload = {
          id: this.portfolioId,
          form: data
        }
        this.patchPortfolio(payload).then((response) => {
          data = null
          this.$bvModal.hide('modal-portfolio')
          this.makeToast(response.msg, 'Success', 'success')
          this.getTalentDataById(this.user.user_id).then((response) => {
            this.portfolio = response.data[0].portfolio
          })
        })
      }
    },
    showDelBox() {
      this.$bvModal
        .msgBoxConfirm('Apakah kamu yakin ingin menghapus portofolio ini ?', {
          title: 'Hapus portofolio',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
        .then((value) => {
          if (value === true) {
            this.deletePortfolio(this.portfolioId).then((response) => {
              this.$bvModal.hide('modal-portfolio')
              this.makeToast(response.msg, 'Success', 'success')
              this.getTalentDataById(this.user.user_id).then((response) => {
                this.portfolio = response.data[0].portfolio
              })
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    makeToast(msg, title, variant) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser', talentData: 'getTalentData' })
  },
  created() {
    this.form = {
      user_id: this.user.user_id
    }
    this.portfolio = this.talentData[0].portfolio
  }
}
</script>
