<template>
  <div class="pet">
        <figure class="image_container">
            <a v-if="pet.Photo!=false" :href="'adopt-a-pet-full.html?pet=' + pet.ID" :title="pet.Name">
                <img :src="pet.Photo" :alt="pet.Name + ' ' + pet.Species + ' ' + pet.PrimaryBreed" class="pet_image">
            </a>
            <a v-if="pet.photo==false" :href="'adopt-a-pet-full.html?pet=' + pet.ID" :title="pet.Name">
                <img src="assets/images/no_photo_animal.png" :alt="pet.Name + ' ' + pet.Species + ' ' + pet.PrimaryBreed" class="pet_image" />
            </a>
        </figure>
        <div class="pet_info">
            <h2><a :title="pet.Name" :href="'adopt-a-pet-full.html?pet=' + pet.ID">{{pet.Name}}</a></h2>
            <div class="breed item">{{ pet.Breed }}</div>
            <div class="gender item"><span class="label">Gender:</span> {{ pet.Sex }}</div>
            <div class="age item"><span class="label">Age:</span> {{ pet.Age }}</div>
            <div class="weight item"><span class="label">Weight:</span> </div>
            <div class="location item"><span class="label">Location:</span> {{ pet.Location }}</div>
            <div class="view_details item"><a :href="'adopt-a-pet-full.html?pet=' + pet.ID" title="Full Details">Full Details</a></div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    pet: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
