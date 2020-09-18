<template>
  <b-row class="f-form">
    <b-col md="12">
      <b-card border-variant="white" class="text-center">
        <b-card-header header-bg-variant="white" class="text-left">
          <p>Skill</p>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-row class="component-form">
              <b-col md="10">
                <b-input type="text" id="name" placeholder="Masukan skill" required></b-input>
              </b-col>
              <b-col md="2">
                <b-button class="b-button-save">Simpan</b-button>
              </b-col>
            </b-row>
          </b-form>
          <b-row class="selected-skill">
            <b-col md="auto" style="padding: 0em 0.8em 0em 0em;">
              <b-button disabled size="md" block class="b-button-skill">Java</b-button>
            </b-col>
            <b-col md="auto" style="padding: 0em 0.8em 0em 0em;">
              <b-button disabled size="md" block class="b-button-skill">AureliaJS</b-button>
            </b-col>
            <b-col md="auto" style="padding: 0em 0.8em 0em 0em;">
              <b-button disabled size="md" block class="b-button-skill">AureliaJS</b-button>
            </b-col>
            <b-col md="auto" style="padding: 0em 0.8em 0em 0em;">
              <b-button disabled size="md" block class="b-button-skill">AureliaJS</b-button>
            </b-col>
            <b-col md="auto" style="padding: 0em 0.8em 0em 0em;">
              <b-button disabled size="md" block class="b-button-skill">AureliaJS</b-button>
            </b-col>
            <b-col md="auto" style="padding: 0em 0.8em 0em 0em;">
              <b-button disabled size="md" block class="b-button-skill">Java</b-button>
            </b-col>
            <b-col md="auto" style="padding: 0em 0.8em 0em 0em;">
              <b-button disabled size="md" block class="b-button-skill">AureliaJS</b-button>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
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
export default {
  name: 'FormSkill'
}
</script>
