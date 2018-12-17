<template>
  <div class="pet_detail">
    <figure class="image_container">
        <a href="adopt-a-pet-full.html?pet={{pet.ID}}" title="{{pet.AnimalName}}"><img src="{{pet.Slides[0].src}}" alt="{{pet.AnimalName}} - {{pet.Species}}" class="pet_image"></a>
    </figure>
    <h2><a href="adopt-a-pet-full.html?pet={{pet.ID}}" title="{{pet.AnimalName}}">{{pet.AnimalName}}</a></h2>
    <div class="decription item">{{pet.Dsc}}</div>
    <a href="adopt-a-pet-full.html?pet={{pet.ID}}" title="Read More about {{pet.AnimalName}}" class="more">Read More <i class="fa fa-caret-right"></i></a>
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
    return {        
    }
  }
}
</script>

<style>
</style>
