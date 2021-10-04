<template>
    <div class='main-page dark-background-secondary'>
        <div class='row row-header rounded'>
            <div class='column column-100'>
                <Header title='Incremental Mining' />
            </div>
        </div>
        <div class='row row-content'>
            <div class='column column-25 column-sidebar'>
                <SideBar />
            </div>
            <div class='column column-75'>
                <TabContent title='Test Title'/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import SideBar from './SideBar.vue'
import TabContent from './TabContent.vue'

export default {
    components: {
        Header,
        SideBar,
        TabContent
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