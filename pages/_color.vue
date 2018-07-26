<template>
  <div class="color" :style="{backgroundColor: color.name}">
    <div class="container">
      <h1 class="title" :style="{color: labelColor}" v-text="color.name"></h1>
      <h2 class="subtitle">
        <nuxt-link :style="{color: labelColor}" to="/">&larr; Back To Color Grid</nuxt-link>
      </h2>
    </div>
  </div>
</template>

<script>
import { setLabelColor } from '@/helpers'

export default {
  asyncData({ store, params, payload }, callback) {
    let color = store.state.colors.find(color => color.name === params.color);
    let labelColor = setLabelColor(color);
    callback(null, { color, labelColor });
  }
};
</script>

<style scoped>
.container {
  padding-top: 0;
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
  background: none;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 2.75rem;
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
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.25rem;
}
.links {
  padding-top: 15px;
}
</style>
