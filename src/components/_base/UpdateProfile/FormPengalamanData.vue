<template>
  <b-row class="f-form">
    <b-col md="12">
      <b-card border-variant="white" class="text-center">
        <b-card-header header-bg-variant="white" class="text-left">
          <p>Pengalaman Kerja</p>
        </b-card-header>
        <b-card-body>
          <b-form @submit.prevent="onSubmit()">
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="position" class="l-label">Posisi</label>
                <b-input
                  type="text"
                  v-model="form.exp_position"
                  id="position"
                  placeholder="Web Developer"
                  required
                ></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="company" class="l-label">Nama perusahaan</label>
                <b-input
                  type="text"
                  v-model="form.exp_company"
                  id="company"
                  placeholder="PT Harus bisa"
                  required
                ></b-input>
              </b-col>
              <b-col class="text-left">
                <label for="date" class="l-label">Job Date</label>
                <b-input
                  type="text"
                  v-model="form.exp_date"
                  id="date"
                  placeholder="Januari 2018"
                  required
                ></b-input>
              </b-col>
            </b-row>
            <b-row class="component-form">
              <b-col class="text-left">
                <label for="description" class="l-label"
                  >Deskripsi Singkat</label
                >
                <b-form-textarea
                  type="text"
                  v-model="form.exp_desc"
                  rows="4"
                  id="description"
                  placeholder="Tuliskan deskripsi singkat"
                  required
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-button block size="lg" class="b-button-add" type="submit"
              >Tambah pengalaman kerja</b-button
            >
          </b-form>
          <b-row class="selected-skill">
            <b-col
              md="auto"
              style="padding: 0em 0.8em 0em 0em"
              v-for="(item, index) in exp"
              :key="index"
            >
              <b-button
                size="md"
                block
                class="b-button-skill"
                v-b-modal.modal-exp
                @click="onClick(item)"
                >{{ item.exp_company }}</b-button
              >
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
    <b-modal id="modal-exp" title="Edit Pengalaman Kerja" centered hide-footer>
      <b-form @submit.prevent="onUpdate()">
        <b-row class="component-form">
          <b-col class="text-left">
            <label for="position" class="l-label">Posisi</label>
            <b-input
              type="text"
              v-model="formUpdate.exp_position"
              id="position"
              placeholder="Web Developer"
              required
            ></b-input>
          </b-col>
        </b-row>
        <b-row class="component-form">
          <b-col class="text-left">
            <label for="company" class="l-label">Nama perusahaan</label>
            <b-input
              type="text"
              v-model="formUpdate.exp_company"
              id="company"
              placeholder="PT Harus bisa"
              required
            ></b-input>
          </b-col>
          <b-col class="text-left">
            <label for="date" class="l-label">Job Date</label>
            <b-input
              type="text"
              v-model="formUpdate.exp_date"
              id="date"
              placeholder="Januari 2018"
              required
            ></b-input>
          </b-col>
        </b-row>
        <b-row class="component-form">
          <b-col class="text-left">
            <label for="description" class="l-label">Deskripsi Singkat</label>
            <b-form-textarea
              type="text"
              v-model="formUpdate.exp_desc"
              rows="4"
              id="description"
              placeholder="Tuliskan deskripsi singkat"
              required
            ></b-form-textarea>
          </b-col>
        </b-row>
        <b-button block size="lg" class="b-button-add" type="submit"
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
  name: 'FormPengalamanKerja',
  data() {
    return {
      form: {},
      formUpdate: {},
      exp: [],
      expId: ''
    }
  },
  methods: {
    ...mapActions(['getTalentDataById', 'postExp', 'patchExp', 'deleteExp']),
    onSubmit() {
      this.postExp(this.form).then((response) => {
        this.form = {
          user_id: this.user.user_id,
          exp_position: null,
          exp_company: null,
          exp_date: null,
          exp_desc: null
        }
        this.makeToast(response.msg, 'Success', 'success')
        this.getTalentDataById(this.user.user_id).then((response) => {
          this.exp = response.data[0].experience
        })
      })
    },
    onClick(data) {
      this.expId = data.exp_id
      this.formUpdate = {
        user_id: data.user_id,
        exp_position: data.exp_position,
        exp_company: data.exp_company,
        exp_date: data.exp_date,
        exp_desc: data.exp_desc
      }
    },
    onUpdate() {
      const payload = {
        id: this.expId,
        form: this.formUpdate
      }
      this.patchExp(payload).then((response) => {
        this.$bvModal.hide('modal-exp')
        this.makeToast(response.msg, 'Success', 'success')
        this.getTalentDataById(this.user.user_id).then((response) => {
          this.exp = response.data[0].experience
        })
      })
    },
    showDelBox() {
      this.$bvModal
        .msgBoxConfirm(
          'Apakah kamu yakin ingin menghapus pengalaman kerja ini ?',
          {
            title: 'Hapus pengalaman kerja',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'YES',
            cancelTitle: 'NO',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
          }
        )
        .then((value) => {
          if (value === true) {
            this.deleteExp(this.expId).then((response) => {
              this.$bvModal.hide('modal-exp')
              this.makeToast(response.msg, 'Success', 'success')
              this.getTalentDataById(this.user.user_id).then((response) => {
                this.exp = response.data[0].experience
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
    this.exp = this.talentData[0].experience
  }
}
</script>
