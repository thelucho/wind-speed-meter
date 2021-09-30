<template>
  <div class="box is-flex is-justify-content-space-between">
    <div class="source">{{ name }}</div>
    <div class="speed">
      {{ formatedSpeed }} Km/h
      <span class="tag" :class="getSpeedStatus(formatedSpeed)">
        {{ getSpeedTag(formatedSpeed) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DataListItem extends Vue {
  @Prop(Number) private speed: any;
  @Prop(String) private name!: string;

  private formatedSpeed!: number;

  private created() {
    if (this.name === 'Open Weather' || this.name === 'Stormglass') {
      this.formatedSpeed = Math.round(this.speed * 3.6);
    }

    if (this.name === 'Weather API' || this.name === 'Accuweather') {
      this.formatedSpeed = this.speed;
    }
  }

  private getSpeedStatus(speed: number) {
    return speed < 12 ? 'is-success' : speed > 24 ? 'is-danger' : 'is-warning';
  }

  private getSpeedTag(speed: number) {
    return speed < 12 ? 'Good' : speed > 24 ? 'Bad' : 'Regular';
  }
}
</script>

<style lang="scss">
.box {
  border-radius: 15px;

  .source {
    font-weight: $font-semi-bold;
  }

  .speed {
    font-size: 14px;
  }
}
</style>
