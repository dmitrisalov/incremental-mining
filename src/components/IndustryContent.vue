<template>
    <div class='tab-content card card-light'>
        <div class='row row-title row-producer'>
            <div class='column background-accent rounded-top'>
                <h2>{{ industry.name }}</h2>
            </div>
        </div>
        <div class='row row-body'>
            <div class='column column-producer'>
                <ProducerCard />
            </div>
            <div class='column column-producer'>
                <ProducerCard />
            </div>
            <div class='column column-producer'>
                <ProducerCard />
            </div>
        </div>
        <div class='row row-body'>
            <div class='column column-producer'>
                <ProducerCard />
            </div>
            <div class='column column-producer'>
                <ProducerCard />
            </div>
            <div class='column column-producer'>
                <ProducerCard />
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { getIndustry } from '/src/util/storeUtil.js'

import ProducerCard from './ProducerCard.vue'

export default {
    setup() {
        const store = useStore()

        return {
            industryId: computed(() => store.state.selectedIndustryId),
            industry: computed(() => getIndustry(store.state.selectedIndustryId))
        }
    },
    components: {
        ProducerCard
    }
}
</script>

<style>
.tab-content .row-title, .row-body {
    padding-left: 1rem;
    padding-right: 1rem;
}

.tab-content .row-title h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
}

.tab-content .row-body {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>