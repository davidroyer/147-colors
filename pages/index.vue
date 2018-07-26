<template>
  <div class="colorgrid">
    <ul class="colorgrid-list">
      <li v-for="(color, index) in colors" :key="index" class="colorgrid-item" :style="{backgroundColor: color.name}">
        <nuxt-link class="colorgrid-item-link" :to="'/'+color.name"></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    colors() {
      return this.$store.state.colors;
    }
  }
};
</script>

<style>
.colorgrid-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  padding: 0;
  list-style-type: none;
}

.colorgrid-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.colorgrid-item-link {
  height: 100%;
  width: 100%;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.links {
  padding-top: 15px;
}
</style>
