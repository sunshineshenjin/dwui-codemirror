<template>
  <div id="app" style="height: 100%;width: 100%">
    <test-codemirror></test-codemirror>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>

import TestCodemirror from './Test-Codemirror'
export default {
  components: { TestCodemirror }
}
</script>
