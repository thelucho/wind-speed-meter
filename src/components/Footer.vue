<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Wind Speed Meter</strong> by <a href="#">@thelucho</a>.
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 35px 30px;
}
</style>