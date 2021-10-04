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
                <IndustryContent />
            </div>
        </div>
    </div>
</template>

<script>
import TitleHeader from './TitleHeader.vue'
import Industries from './Industries.vue'
import IndustryContent from './IndustryContent.vue'

export default {
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