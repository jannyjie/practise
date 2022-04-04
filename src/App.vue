<template>
    <nav>
    <router-link :class="{ active: idx === 0 }" to="/about">About</router-link>
    <router-link :class="{ active: idx === 1 }" to="/work">work</router-link>
    <router-link :class="{ active: idx === 2 }" to="/Courses">Courses</router-link>
  </nav>
  
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
