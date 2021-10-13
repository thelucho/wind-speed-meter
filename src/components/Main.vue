<template>
  <div class="main">
    <Navbar />
    <DataList
      :openWeather="openWeather"
      :weatherAPI="weatherAPI"
      :stormglass="stormglass"
      :accuweather="accuweather[0]"
    />
    <Footer />
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
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

import EventBus, { ACTIONS } from '@/event-bus';
import Users from '@/api/weather';

@Component({
  components: {
    DataList,
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

  private async created() {
    this.fetchWeatherData('test');
  }

  private mounted() {
    EventBus.$on(ACTIONS.SEARCH_LOCATION, this.fetchWeatherData);
  }

  private async fetchWeatherData(text: string) {
    this.isLoading = true;

    try {
      const [openWeather, weatherAPI] = await Promise.all([
        Users.getOpenWeatherData(),
        Users.getWeatherAPIData(),
      ]);

      if (openWeather) {
        this.stormglass = await Users.getStormglassData(openWeather.coord.lat, openWeather.coord.lon);
      }

      if (openWeather) {
        let object: any;
        object = await Users.getAccuWeatherData(openWeather.coord.lat, openWeather.coord.lon);

        if (object) {
          this.accuweather = await Users.getAccuWeatherDataLocation(object.Key);
        }
      }

      this.openWeather = openWeather;
      this.weatherAPI = weatherAPI;
      this.isLoading = false;
    } catch (err) {
      console.log(err);
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
