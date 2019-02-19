<template>
  <div>
    <PetList :pets="pets" />
  </div>
</template>

<style>
</style>

<script>
import Api from '../services/Api'
import PetList from '../components/pet-list.vue'
export default {
  name: 'PageIndex',
  data () {
    return {
      loading: true,
      pets: []
    }
  },
  components: {
    'PetList': PetList
  },
  mounted () {
    Api.getPets()
      .then(pets => {
        this.pets = pets
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
