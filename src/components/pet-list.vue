<template>
<div class="pet_search">
    <PetResult v-for="(pet, index) in pets"  :key="pet.ID" :pet="pet" :class="'pet pet_'+index" />
</div>
</template>
<script>
import PetResult from './pet-result.vue'
export default {
  props: {
    pets: {
      type: Array,
      required: true
    }
  },
  components: {
    'PetResult': PetResult
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
