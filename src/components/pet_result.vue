<template>
  <div v-for="pet in vm.pets | orderObjectBy:'Name'"  :key="pet.ID" ng-class-odd="'odd'" ng-class-even="'even'" ng-hide="" class="pet pet_0 odd">
        <!-- ngIf: pet.hasvideo == true -->
        <figure class="image_container">
            <!-- ngIf: pet.largephoto!=false -->
            <a v-if="pet.largephoto!=false" ng-href="adopt-a-pet-full.html?pet={{ pet.ID }}" title="{{ pet.Name }}" class="ng-scope" href="adopt-a-pet-full.html?pet={{ pet.ID }}">
                <img ng-src="{{ pet.image }}" alt="Amelia w/ Esther Small&amp;Furry Guinea Pig" class="pet_image" src="https://g.petango.com/photos/244/a8baaea5-cc97-463f-ae82-b367fe50cfd7.jpg">
            </a><!-- end ngIf: pet.largephoto!=false -->
            <!-- ngIf: pet.largephoto==false -->
        </figure>
        <div class="pet_info">
            <h2><a ng-href="adopt-a-pet-full.html?pet=39689157" title="Amelia w/ Esther&quot;" class="ng-binding" href="adopt-a-pet-full.html?pet={{ pet.ID }}">Amelia w/ Esther</a></h2>
            <div class="breed item ng-binding">{{ pet.breed }}</div>
            <div class="gender item ng-binding"><span class="label">Gender:</span> {{ pet.gender }}</div>
            <div class="age item ng-binding"><span class="label">Age:</span> {{ pet.age }}</div>
            <div class="weight item ng-binding"><span class="label">Weight:</span> </div>
            <div class="location item ng-binding"><span class="label">Location:</span> {{ pet.location }}</div>
            <div class="view_details item"><a ng-href="adopt-a-pet-full.html?pet=39689157" title="Full Details" href="adopt-a-pet-full.html?pet={{ pet.ID }}">Full Details</a></div>
        </div>
    </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style>
</style>
