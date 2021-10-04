<template>
    <div class='main-page'>
        <div class='row row-header'>
            <div class='column column-100'>
                <TitleHeader title='Incremental Mining' />
            </div>
        </div>
        <div class='row row-content'>
            <div class='column column-25 column-sidebar'>
                <Industries />
            </div>
            <div class='column column-75'>
                <IndustryContent v-if="selectedIndustryId != -1"/>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TitleHeader from './TitleHeader.vue'
import Industries from './Industries.vue'
import IndustryContent from './IndustryContent.vue'

export default {
    setup() {
        const store = useStore()

        return {
            selectedIndustryId: computed(() => store.state.selectedIndustryId)
        }
    },
    components: {
        TitleHeader,
        Industries,
        IndustryContent
    }
}
</script>

<style>
.row-header {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.column-sidebar {
    padding-right: 0 !important;
}
</style>