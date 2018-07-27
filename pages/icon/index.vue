<template>
  <div class="grid h-full">
    <div class="icon relative" v-for="(icon, index) in icons" :key="index" :style="background(icon)">
      <overdrive :id="icon.id">
        <!-- <div> -->
          <nuxt-link :to="url(icon)" class="pin absolute"></nuxt-link>
        <!-- </div> -->
      </overdrive>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['icons'])
  },
  methods: {
    background(icon) {
      return {
        backgroundColor: icon.color
      };
    },
    url(icon) {
      return `/icon/${icon.id}`;
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.icon {
  border-radius: 4px;
  height: 180px;
  width: 180px;
  transition: all 0.2s ease-out;
}
.icon:hover {
  transform: translateY(2px);
}
</style>
