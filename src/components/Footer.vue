<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div class="switch-mode">
        <SwitcherTheme />
      </div>
      <div class="location">
        <b-icon pack="fas" icon="location-arrow"></b-icon>
        Rio Cuarto, Argentina
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SwitcherTheme from '@/components/SwitcherTheme.vue';

@Component({
  components: {
    SwitcherTheme,
  },
})
export default class Footer extends Vue { }
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-accent) !important;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 25px 30px;
  color: $white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  .switch-mode {
    width: 36px;
    height: 36px;
    position: absolute;
    top: -50px;
    right: 15px;
  }
}
</style>
