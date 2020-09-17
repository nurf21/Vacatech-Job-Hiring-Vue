<template>
  <b-row class="skills">
    <b-col md="12" sm="12" class="text-center title">
      <h1>Skill</h1>
    </b-col>
    <b-col md="12" sm="12" class="text-center skill">
      <b-button disabled size="md" class="b-button-skill">Java</b-button>
      <b-button disabled size="md" class="b-button-skill">Phyton</b-button>
      <b-button disabled size="md" class="b-button-skill">JavaScript</b-button>
    </b-col>
  </b-row>
</template>

<style scoped>
.skills {
  padding: 2.75em 0em;
}

.skills .title h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.skills .skill .b-button-skill {
  color: white;
  background-color: #fdd074;
  border: 1px solid #fbb017;
  margin: 0em 0.5em;
}
</style>

<script>
export default {
  name: 'UserSkill'
}
</script>
