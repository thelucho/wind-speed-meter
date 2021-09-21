<template>
  <div class="navbar bg-solid">
    <h1>Wind Speed Meter</h1>
    <div class="search">
      <b-field>
        <b-input placeholder="Search..."
          type="search"
          icon-pack="fas"
          icon="home"
          icon-clickable
          @icon-click="searchIconClick">
        </b-input>
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Navbar extends Vue {
  private searchIconClick() {
    console.log('busqueda');
  }
}
</script>

<style lang="scss">
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 100px;
  padding: 15px;
  box-sizing: border-box;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.navbar h1 {
  font-size: 19px;
  font-weight: bold;
}

.navbar .search {
  width: 100%;
  margin-top: 10px;
}

.navbar .search .input {
  border-radius: 30px;
  width: 100%;
}
</style>
