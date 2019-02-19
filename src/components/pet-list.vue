<template>
<div class="pet_search">
    <PetFilters />
    <PetResult v-for="(pet, index) in pets"  :key="pet.ID" :pet="pet" :class="'pet_'+index" />
</div>
</template>
<script>
import {EventBus} from '../services/event-bus.js'
import Api from '../services/api.js'
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
  computed: {
    setInitialPets () {
      return {...this.pets}
    }
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
    filterByLocation (payload) {
      let animalTypeLabel = ''
      let genderLabel = ''
      let locationLabel = ''

      switch (payload.selectedAnimalType) {
        case '1':
          animalTypeLabel = 'Dog'
          break
        case '2':
          animalTypeLabel = 'Cat'
          break
        default:
          animalTypeLabel = 'All Species'
      }

      switch (payload.selectedGender) {
        case 'M':
          genderLabel = 'Male'
          break
        case 'F':
          genderLabel = 'Female'
          break
        default:
          genderLabel = 'Both'
      }

      switch (payload.selectedLocation) {
        case '728':
          locationLabel = 'Springfield'
          break
        case '56':
          locationLabel = 'Leverett'
          break
        default:
          locationLabel = 'All'
      }

      return Api.filterPetsByLocation({
        'action': 'filter',
        'site': { 'value': payload.selectedLocation, 'label': locationLabel },
        'speciesID': { 'value': payload.selectedAnimalType, 'label': animalTypeLabel },
        'sex': { 'value': payload.selectedGender, 'label': genderLabel }
      })
    }
  },
  mounted () {
    EventBus.$on('filter-change-location', (payload) => {
      this.filterByLocation(payload)
        .then((pets) => {
          this.pets = pets
        })
    })
  }
}
</script>

<style>
</style>
