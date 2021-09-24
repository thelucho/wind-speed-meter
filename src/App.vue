<template>
  <div id="app">
    <Main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from './components/Main.vue';

@Component({
  components: {
    Main,
  },
})
export default class App extends Vue { }
</script>

<style lang="scss">
body {
  font-family: $font-family !important;
  font-weight: $font-regular !important;
}

.theme-light {
  --color-primary: #fff;
  --color-secondary: #efefef;
  --color-accent: #3965fe;
  --font-color: #000;
  transition: background-color 1s;
}
.theme-dark {
  --color-primary: #000;
  --color-secondary: #4b4b4b;
  --color-accent: #202020;
  --font-color: #fff;
  transition: background-color 1s;
}
</style>