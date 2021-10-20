<template>
  <div class="empty-data">
    <b-notification
      type="is-danger"
      aria-close-label="Close notification"
      :closable="false"
      role="alert"
      class="notification">
      <strong>¡Upssss!</strong>
      <p>No se encontraron resultados</p>
    </b-notification>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EmptyData extends Vue {}
</script>

<style lang="scss" scoped>
.empty-data {
  padding: 15px;
  height: calc(100vh - 212px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 77px;

  .notification {
    text-align: center;

    strong {
      font-size: 23px;
      margin-bottom: 10px;
      display: block;
    }

    p {
      font-size: 18px;
    }
  }
}
</style>
