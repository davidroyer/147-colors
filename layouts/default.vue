<template>
  <div class="app-wrapper">
    <sidebar/>
    <nuxt/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
  components: { Sidebar }
};
</script>
<style lang="css">
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
