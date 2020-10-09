<template>
  <b-row class="f-form">
    <b-col md="12">
      <b-card border-variant="white" class="text-center">
        <b-card-header header-bg-variant="white" class="text-left">
          <p>Skill</p>
        </b-card-header>
        <b-card-body>
          <b-form @submit.prevent="onSubmit()">
            <b-row class="component-form">
              <b-col md="10">
                <b-input
                  type="text"
                  v-model="form.skill_name"
                  id="name"
                  placeholder="Masukan skill"
                  required
                ></b-input>
              </b-col>
              <b-col md="2">
                <b-button class="b-button-save" type="submit">Simpan</b-button>
              </b-col>
            </b-row>
          </b-form>
          <b-row class="selected-skill">
            <b-col
              md="auto"
              style="padding: 0em 0.8em 0em 0em"
              v-for="(item, index) in talentData[0].skill"
              :key="index"
            >
              <b-button
                size="md"
                block
                class="b-button-skill"
                @click="onClick(item)"
                v-b-modal.modal-center
                >{{ item.skill_name }}</b-button
              >
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
    <b-modal id="modal-center" title="Edit Skill" centered hide-footer>
      <b-form @submit.prevent="onUpdate()">
        <b-row class="component-form">
          <b-col md="12">
            <b-input
              type="text"
              v-model="formUpdate.skill_name"
              id="name"
              placeholder="Masukan skill"
              required
            ></b-input>
          </b-col>
          <b-col md="2" class="mt-3">
            <b-button class="b-button-save" type="submit">Simpan</b-button>
          </b-col>
          <b-col md="2" class="mt-3">
            <b-button variant="danger">Hapus</b-button>
          </b-col>
        </b-row>
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

.component-form .l-label {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #9ea0a5;
}

.b-button-save {
  border: transparent;
  background-color: #fbb017;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
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
  name: 'FormSkill',
  data() {
    return {
      form: {},
      formUpdate: {}
    }
  },
  methods: {
    ...mapActions(['postSkill', 'getTalentDataById']),
    onSubmit() {
      this.postSkill(this.form).then((result) => {
        this.form = {
          user_id: this.user.user_id,
          skill_name: null
        }
        this.talentData = {}
        this.makeToast('Skill added', 'Success', 'success')
        this.getTalentDataById(this.user.user_id)
      })
    },
    onClick(data) {
      this.formUpdate = {
        skill_name: data.skill_name
      }
    },
    onUpdate() {
      console.log(this.formUpdate)
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
  }
}
</script>
