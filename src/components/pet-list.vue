<template>
<div class="pet_search">
    <PetFilters />
    <PetResult v-for="(pet, index) in pets"  :key="pet.ID" :pet="pet" :class="'pet_'+index" />
</div>
</template>
<script>
import {EventBus} from '../services/event-bus.js'
import PetResult from './pet-result.vue'
import PetFilters from './pet-filters.vue'
export default {
  props: {
    pets: {
      type: Array,
      required: true
    }
  },
  components: {
    'PetResult': PetResult,
    'PetFilters': PetFilters
  },
  data () {
    return {
      filters: {
        selectedAnimalType: '',
        selectedGender: '',
        selectedLocation: ''
      }
    }
  },
  methods: {
    updateList (payload) {
      let self = this
      self.filters = payload
      return this.pets
        .filter(function (pet) {
          if ((self.filters.selectedAnimalType && pet.Species === self.filters.selectedAnimalType)) {
            return pet
          }

          if ((self.selectedAnimalGender && pet.Sex === self.selectedAnimalGender)) {
            return pet
          }

          if ((self.selectedLocation && pet.Location === self.selectedLocation)) {
            return pet
          }
        })
    }
  },
  mounted () {
    EventBus.$on('filter-change', (payload) => {
      this.updateList(payload)
    })
  }
}
</script>

<style>
</style>
