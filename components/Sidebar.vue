<template lang="html">
  <div class="sidebar">
    <div class="sidebar-top">
      <button class="sidebar-menu-icon">Menu</button>
      <h1 class="title">147-colors</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">

@media (max-width: 649px) {
  .sidebar {
    height: 60px;
  }
}

.sidebar {
  background: #292929;
}

.sidebar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-menu-icon {
  color: white;
  padding: 0.5rem;
  background: none;
  cursor: pointer;
  margin: 0 .75rem;
}
</style>
