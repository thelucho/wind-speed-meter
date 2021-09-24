<template>
  <div class="switch">
    <div @click="toggleTheme()">
      <b-icon
        pack="fas"
        :icon="switcher ? 'moon' : 'lightbulb'"
      >
      </b-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SwitcherTheme extends Vue {
  private switcher = true;

  private mounted() {
    this.checkThemeOnInit();
  }

  private setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);

    const body = document.getElementsByTagName('body')[0];
    body.className = '';
    body.classList.add(themeName);
  }

  private toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      this.setTheme('theme-light');
      this.switcher = true;
    } else {
      this.setTheme('theme-dark');
      this.switcher = false;
    }
  }

  private checkThemeOnInit() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      this.setTheme('theme-dark');
      this.switcher = false;
    } else {
      this.setTheme('theme-light');
      this.switcher = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  background-color: var(--color-accent);
  width: 36px;
  height: 36px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>