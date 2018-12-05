<template>
  <div class="pet_detail">
    <figure class="image_container">
        <a ng-href="adopt-a-pet-full.html?pet=40275718" title="" href="adopt-a-pet-full.html?pet=40275718"><img src="//g.petango.com/photos/244/b7e03f72-ba72-442a-a88a-7494396bba7f.jpg" alt="Gracie w/ Prudence - Rabbit" class="pet_image"></a>
    </figure>
    <h2><a ng-href="adopt-a-pet-full.html?pet=40275718" title="" class="ng-binding" href="adopt-a-pet-full.html?pet=40275718">Meet Gracie w/ Prudence</a></h2>
    <div class="decription item ng-binding" ng-bind-html="vm.pet.Dsc"></div>
    <a ng-href="adopt-a-pet-full.html?pet=40275718" title="" class="more" href="adopt-a-pet-full.html?pet=40275718">Read More <i class="fa fa-caret-right"></i></a>
  </div>
</template>

<script>
export default {
  name: 'RandomPet',
  data () {
    return {}
  }
}
</script>

<style>
</style>
