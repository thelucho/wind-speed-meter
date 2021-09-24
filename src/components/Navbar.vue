<template>
  <div class="navbar">
    <h1>¡Hola droner!</h1>
    <p>¿Cómo están los vientos para volar hoy?</p>
    <div class="search">
      <b-field grouped position="is-right">
        <b-input placeholder="Ingresá tu ciudad..." type="search"></b-input>
        <b-button label="Buscar" type="is-info" />
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSearch);

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Navbar extends Vue { }
</script>

<style lang="scss">
.navbar {
  background-color: var(--color-accent) !important;
  position: sticky !important;
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
  

  h1 {
    font-size: 21px;
    font-weight: bold;
    color: $white;
  }

  p {
    color: $white;
    font-size: 16px;
  }

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
}
</style>
