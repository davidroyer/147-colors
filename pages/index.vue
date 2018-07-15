<template>
  <div class="home">
    <h1 class="title">147-colors</h1>
    <ul class="grid-colors">
      <li v-for="(color, index) in colors" :key="index" class="grid-color" :style="{backgroundColor: color.name}">
        <nuxt-link class="grid-color-link" :to="'/'+color.name"></nuxt-link>
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
.grid-colors {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  padding: 0;
  list-style-type: none;
}

.grid-color {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-color-link {
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
