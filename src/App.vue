<template>
  <div id="app">
    <Main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from './components/Main.vue';

import EventBus, { ACTIONS } from "@/event-bus";

@Component({
  components: {
    Main,
  },
})
export default class App extends Vue {
  private themeMode = false;

  private mounted() {
    EventBus.$on(ACTIONS.SWITCH_MODE, this.handleThemeMode);
  }

  private handleThemeMode() {
    const body = document.getElementsByTagName('body')[0];

    this.themeMode = !this.themeMode;
    this.themeMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
  }
}
</script>

<style lang="scss">
// Colors
$black: #000;
$black50: #202020;
$grey: #4b4b4b;
$grey50: #808080;
$grey10: #e0e0e0;
$white: #fff;

// Light Theme
$bg-theme-light: $white;
$color-theme-light: $black;

// Dark Theme
$bg-theme-dark: $black;
$color-theme-dark: $white;

body {
  background-color: $bg-theme-light;
  color: $color-theme-light;
}

body.dark-mode {
  background-color: $bg-theme-dark;
  color: $color-theme-dark;
}

.bg-solid {
  background-color: $grey10 !important;
}

.dark-mode .bg-solid {
  background-color: $black50 !important;
}
</style>