<template>
  <div class="color" :style="{backgroundColor: color.name}">
    <div class="container">
      <h1 class="title" v-text="color.name"></h1>
      <h2 class="subtitle"><nuxt-link to="/">Back</nuxt-link></h2>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ store, params, payload }, callback) {
    let color = store.state.colors.find(color => color.name === params.color);
    callback(null, { color });
  }
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

.subtitle {
  font-weight: 300;
  font-size: 2rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  flex: 1 1 100%;
  margin-top: 2rem;
}
.subtitle a {
  text-decoration: none;
  border-bottom: 2px solid grey;
}
.links {
  padding-top: 15px;
}
</style>
