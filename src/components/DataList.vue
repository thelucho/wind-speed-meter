<template>
  <div class="data-list">
    <DataListItem
      v-if="openWeather.wind"
      name="Open Weather"
      :speed="openWeather.wind.speed"
    />

    <DataListItem
      v-if="weatherAPI.current"
      name="Weather API"
      :speed="weatherAPI.current.wind_kph"
    />

    <DataListItem
      v-if="stormglass.hours"
      name="Stormglass"
      :speed="stormglass.hours[stormglass.hours.length - 1].windSpeed.noaa"
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
import DataListItem from '@/components/DataListItem.vue';

@Component({
  components: {
    DataListItem,
  },
})
export default class DataList extends Vue {
  @Prop(Object) private openWeather!: any;
  @Prop(Object) private weatherAPI!: any;
  @Prop(Object) private stormglass!: any;
}
</script>

<style lang="scss" scoped>
.data-list {
  background-color: var(--color-secondary);
  padding: 25px 15px;
}
</style>
