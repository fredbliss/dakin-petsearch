<template>
  <form name="filters"  novalidate>
      <div class="formbody">
          <div class="select">
              <select v-model="selectedAnimalType" @change="emitLocationChangeEvent()">
                <option value="">All</option>
                <option value="1">Dog</option>
                <option value="2">Cat</option>
              </select>
          </div>
          <div class="select">
              <select v-model="selectedGender" @change="emitLocationChangeEvent()">
                <option value="">Both</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
          </div>
          <div class="select">
              <select v-model="selectedLocation" @change="emitLocationChangeEvent()">
                <option value="">All</option>
                <option value="728">Springfield</option>
                <option value="56">Leverett</option>
              </select>
          </div>
      </div>
  </form>
</template>
<script>
import {EventBus} from '../services/event-bus.js'
export default {
  props: {
  },
  data () {
    return {
      selectedAnimalType: '',
      selectedGender: '',
      selectedLocation: ''
    }
  },
  methods: {
    emitChangeEvent () {
      var ctx = this
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('filter-change', ctx._data)
    },
    emitLocationChangeEvent () {
      var ctx = this
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('filter-change-location', ctx._data)
    }
  }
}
</script>

<style>
</style>
