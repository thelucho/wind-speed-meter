<template>
  <div class="main">
    <Navbar />
    <DataList :openWeather="openWeather" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import DataList from '@/components/DataList.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

import Users from '@/api/weather';

@Component({
  components: {
    DataList,
    Footer,
    Navbar,
  }
})
export default class Main extends Vue {
  private openWeather = {}

  private async created() {
    const openWeather = await Users.getOpenWeatherData();
    this.openWeather = openWeather;
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.section {
  flex: 1;
}
</style>

