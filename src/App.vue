<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="stylus">
  *, *:after, *:before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  #app {
    font-family: 'TT Norms', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
