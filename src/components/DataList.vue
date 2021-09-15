<template>
    <div class="data-list">
        <div class="box is-flex is-justify-content-space-between" v-if="openWeather.wind">
            <div>Open Weather</div>
            <div>
                {{ getFormattedSpeed(openWeather.wind.speed) }} Km/h
                <span
                    class="tag"
                    :class="getSpeedAnalysis(openWeather.wind.speed).type"
                >
                    {{ getSpeedAnalysis(openWeather.wind.speed).status }}
                </span>
            </div>
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

    private getFormattedSpeed(speed: number): number {
        const res = Math.round(speed * 1.609);
        return res;
    }

    private getSpeedAnalysis(speed: number) {
        let wind = this.getFormattedSpeed(speed);
    
        let condition = {
            status: 'regular',
            type: 'is-warning',
        };

        if (wind < 12) {
            condition.status = 'good';
            condition.type = 'is-success';
        } else if (wind > 24) {
            condition.status = 'bad';
            condition.type = 'is-warning';
        }

        return condition;
    }
}
</script>

<style lang="scss" scoped>
.data-list {
    padding: 25px 15px;
}
</style>