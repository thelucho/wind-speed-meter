<template>
    <b-navbar type="is-info">
        <template #brand>
            <a href="#">
                Wind Speed Meter
            </a>
        </template>
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light">
                        Search Field
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
    position: sticky;
    top: 0;
    width: 100%;
}
</style>