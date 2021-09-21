<template>
    <div class="box is-flex is-justify-content-space-between">
        <div>{{ name }}</div>
        <div>
            {{ speed }} Km/h
            <span class="tag" :class="type">
                {{ status }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DataListItem extends Vue {
    @Prop(Number) private speed: any;
    @Prop(String) private status!: string;
    @Prop(String) private type!: string;
    @Prop(String) private name!: string;

    private test = 'test';

    private testMethod() {
        console.log('pepe');
    }
}