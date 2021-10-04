<template>
    <div class='sidebar card card-light'>
        <dl v-for='industry in industries' v-bind:key='industry'>
            <dt><IndustryTab v-bind:industry='industry'/></dt>
        </dl>
    </div>
</template>

<script>
import IndustryTab from './IndustryTab.vue'
import { industryStore } from '/src/store/industryStore.js'

export default {
    components: {
        IndustryTab
    },
    data() {
        return {
            industries: industryStore
        }
    }
}
</script>

<style>
.sidebar {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.sidebar dl, dt {
    margin-bottom: 0;
}
</style>