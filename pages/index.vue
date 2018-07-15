<template>
  <div class="grid">
    <h1 class="title">147-colors</h1>
    <div class="grid-colors">
      <div v-for="(color, index) in colors" :key="index" class="grid-color" :style="{backgroundColor: color.name}">
        <nuxt-link :to="'/'+color.name">{{ color.name }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import colors from "~/data/colors.json";

export default {
  asyncData({ payload }, callback) {
    // let color = colors.find(color => color.name === params.color);
    if (colors) {
      callback(null, { colors });
    } else {
      callback({ statusCode: 404, message: "Colors not found" });
    }
  }
  // async asyncData({ app }) {
  //   const colors = await app.$axios.$get("http://localhost:3000/data/db.json");
  //   console.log(colors);
  //   return { colors };
  // },
};
</script>

<style>
.grid-colors {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: 200px;
}

.grid-color {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
