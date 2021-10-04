<template>
    <div class='sidebar dark-background-primary rounded'>
        <dl v-for='element in elements' v-bind:key='element.id'>
            <dt><Tab v-bind:title='element.title'/></dt>
        </dl>
    </div>
</template>

<script>
import Tab from './Tab.vue'

export default {
    components: {
        Tab
    },
    data () {
        return {
            elements: [
                {id: 0, title: 'Mining', selected: false}, 
                {id: 1, title: 'Smelting', selected: false},
                {id: 3, title: 'Smithing', selected: false},
                {id: 4, title: 'Trading', selected: false}
            ]
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