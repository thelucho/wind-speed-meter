<template>
  <div class="search">
    <b-field grouped position="is-right">
      <b-input placeholder="Ingresá tu ciudad..." type="search" v-model="searchText"></b-input>
      <b-button label="Buscar" type="is-info" @click.prevent="submitSearch()" />
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import EventBus, { ACTIONS } from '@/event-bus';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSearch);

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class SearchField extends Vue {
  private searchText = '';

  private submitSearch() {
    EventBus.$emit(ACTIONS.SEARCH_LOCATION, this.searchText);
  }
}
</script>

<style lang="scss">
.search {
  width: 100%;
  margin-top: 10px;

  .input {
    border-radius: 30px;
    width: 100%;
    height: 40px;
    position: relative;
    padding-left: 20px !important;
    font-size: 15px;
    border: none !important;

    &:focus,
    &:active {
      outline: none !important;
      box-shadow: none !important;
      border: none !important;
    }
  }

  .button {
    position: absolute;
    border-radius: 30px;
    border: 2px solid $white !important;
    height: 40px;
    background-color: var(--color-accent);
  }
}

.field.is-grouped > .control {
  width: 100%;
  margin-right: 0px !important;
}
</style>