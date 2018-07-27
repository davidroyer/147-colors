<template>
  <div class="colorgrid" :class="{'has-color-overlay': $route.params.color}">
    <ul class="colorgrid-list">
      <li v-for="(color, index) in colors" :key="index" class="colorgrid-item" :style="{backgroundColor: color.name}">
        <nuxt-link class="colorgrid-item-link" :style="{color: color.name}" :to="'/'+color.name">View {{color.name}}</nuxt-link>
      </li>
    </ul>
    <div class="colorgrid-color-wrapper" :class="{active: $route.params.color}">
      <nuxt-child :key="$route.params.color"/>
    </div>
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
.colorgrid {
  position: relative;
  overflow: hidden;
}

@media (max-width: 649px) {
  .app-wrapper {
    height: 100vh;
    overflow: hidden;
  }
  .colorgrid {
    height: 100%;
  }

  .colorgrid-color-wrapper {
    top: 60px;
    position: fixed;
  }
  .colorgrid.has-color-overlay {
    overflow: hidden;
    height: calc(100vh - 57px);
  }
}

.colorgrid-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  padding: 0;
  list-style-type: none;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
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

.colorgrid-color-wrapper {
  position: absolute;
  z-index: 999999999;
  top: 0;
  right: 0;
  left: 0;
  /* transform: scale3d(0, 0, 0); */
  /* transition: transform 0.45s ease-in-out; */
}

.colorgrid-color-wrapper.active {
  /* transform: scale3d(1, 1, 1); */
}
</style>
