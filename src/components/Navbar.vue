<template>
  <div class="navbar">
    <h1>¡Hola droner!</h1>
    <p>¿Cómo están los vientos para volar hoy?</p>
    <SearchField />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchField from '@/components/SearchField.vue';

@Component({
  components: {
    SearchField,
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
}
</style>
