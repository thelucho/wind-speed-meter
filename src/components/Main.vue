<template>
  <div class="main">
    <Navbar />
    <DataList
      v-if="Object.keys(openWeather).length"
      :openWeather="openWeather"
      :weatherAPI="weatherAPI"
      :stormglass="stormglass"
      :accuweather="accuweather[0]"
    />
    <EmptyData v-if="showEmptyMsg" />
    <Footer :location="searchText" />
    <b-loading
      :is-full-page="false"
      v-model="isLoading"
      :can-cancel="false"
    ></b-loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DataList from '@/components/DataList.vue';
import EmptyData from '@/components/EmptyData.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

import EventBus, { ACTIONS } from '@/event-bus';
import Users from '@/api/weather';

@Component({
  components: {
    DataList,
    EmptyData,
    Footer,
    Navbar,
  },
})
export default class Main extends Vue {
  private openWeather = {};
  private weatherAPI = {};
  private stormglass = {};
  private accuweather = {};

  private isLoading = false;
  private searchText = '';
  private showEmptyMsg = false;

  private async created() {
    const locationLS = localStorage.getItem('location');

    if (locationLS) {
      this.fetchWeatherData(locationLS);
    } else {
      this.showEmptyMsg = true;
    }
  }

  private mounted() {
    EventBus.$on(ACTIONS.SEARCH_LOCATION, this.fetchWeatherData);
  }

  private async fetchWeatherData(location: string) {
    this.isLoading = true;
    this.showEmptyMsg = false;


    this.openWeather = {};
    this.weatherAPI = {};
    this.stormglass = {};
    this.accuweather = {};

    try {
      const [openWeather, weatherAPI] = await Promise.all([
        Users.getOpenWeatherData(location),
        Users.getWeatherAPIData(location),
      ]);

      try {
        if (openWeather) {
          this.stormglass = await Users.getStormglassData(openWeather.coord.lat, openWeather.coord.lon);
        }
      } catch (err) {
        console.log(err);
      }

      if (openWeather) {
        let object: any;
        object = await Users.getAccuWeatherData(openWeather.coord.lat, openWeather.coord.lon);

        if (object) {
          this.accuweather = await Users.getAccuWeatherDataLocation(object.Key);
        }
      }

      this.searchText = `${openWeather.name}, ${openWeather.sys.country}`;
      this.openWeather = openWeather;
      this.weatherAPI = weatherAPI;
      this.isLoading = false;
    } catch (err) {
      console.log(err);
      this.showEmptyMsg = true;
      this.searchText = '';
      this.isLoading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: var(--color-secondary);
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .section {
    flex: 1;
  }
}
</style>

<style lang="scss">
.loading-overlay {
  .loading-background {
    background-color: rgba(0, 62, 231, 0.856) !important;
    transition: all 2s ease-in-out;
  }
}
</style>
