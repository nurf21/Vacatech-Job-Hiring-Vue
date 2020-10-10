<template>
  <b-row class="skills" v-if="talentData[0].skill.length > 0">
    <b-col md="12" sm="12" class="text-center title">
      <h1>Skill</h1>
    </b-col>
    <b-col md="12" sm="12" class="text-center skill">
      <b-button
        disabled
        size="md"
        class="b-button-skill"
        v-for="(item, index) in talentData[0].skill"
        :key="index"
      >{{ item.skill_name }}</b-button>
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

@media screen and (max-width: 767px) {
  .skills .skill .b-button-skill {
    margin: 5px;
  }
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserSkill',
  computed: {
    ...mapGetters({ talentData: 'getTalentData' })
  }
}
</script>
