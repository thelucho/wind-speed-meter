<template>
  <div class="data-list">
    <DataItem
      v-if="openWeather.wind"
      name="Open Weather"
      :speed="getFormattedSpeed(openWeather.wind.speed)"
      :status="getSpeedAnalysis(openWeather.wind.speed).status"
      :type="getSpeedAnalysis(openWeather.wind.speed).type"
    />
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
    <div class="box">I'm in a box.</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DataItem from '@/components/DataItem.vue';

@Component({
  components: {
    DataItem,
  },
})
export default class DataList extends Vue {
  @Prop(Object) private openWeather!: any;

  private getFormattedSpeed(speed: number): number {
    const res = Math.round(speed * 1.609);
    return res;
  }

  private getSpeedAnalysis(speed: number) {
    const wind = this.getFormattedSpeed(speed);

    const condition = {
      status: 'regular',
      type: 'is-warning',
    };

    if (wind < 12) {
      condition.status = 'good';
      condition.type = 'is-success';
    } else if (wind > 24) {
      condition.status = 'bad';
      condition.type = 'is-warning';
    }

    return condition;
  }
}
</script>

<style lang="scss" scoped>
.data-list {
  padding: 25px 15px;
}
</style>
