<template>
  <div class="color" :style="{backgroundColor: color.name}">
    <div class="container">
      <h1 class="title" v-text="color.name"></h1>
      <h2 class="grid-link"><nuxt-link to="/"> <-- Back</nuxt-link></h2>
    </div>
  </div>
</template>

<script>
import colors from "~/data/colors.json";

export default {
  asyncData({ params, payload }, callback) {
    let color = colors.find(color => color.name === params.color);
    if (color) {
      callback(null, { color });
    } else {
      callback({ statusCode: 404, message: "Color not found" });
    }
  }
  // async asyncData({ app, params }) {
  //   const color = colors.find(color => color.name === params.color);
  //
  //   return { color };
  // }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-flow: row wrap;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  flex: 1 1 100%;
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
