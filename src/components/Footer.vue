<template>
  <footer class="footer bg-solid">
    <div class="content has-text-centered">
      <div class="switch-mode">
        <b-field>
            <b-switch
              v-model="themeMode"
              passive-type='is-dark'
              type='is-warning'
              @input.native="handleSwitchMode()"
            >
              {{ themeMode ? "On" : "Off" }}
            </b-switch>
        </b-field>
      </div>
      <p><strong>Wind Speed Meter</strong> by <a href="#">@thelucho</a>.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EventBus, { ACTIONS } from "@/event-bus";

@Component
export default class Footer extends Vue {
  private themeMode = true;

  private handleSwitchMode() {
    this.themeMode = !this.themeMode;
    EventBus.$emit(ACTIONS.SWITCH_MODE);
    console.log('presionado');
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 35px 30px;
}
</style>
