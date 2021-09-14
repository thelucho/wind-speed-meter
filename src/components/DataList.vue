<template>
    <div class="data-list">
        <div class="box">
            I'm in a box.FIRST
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
        <div class="box">
            I'm in a box.
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DataList extends Vue {
    @Prop(Object) private openWeather!: any;

    private created() {
        console.log(this.openWeather);
    }
}
</script>

<style lang="scss" scoped>
.data-list {
    padding: 25px 15px;
}
</style>