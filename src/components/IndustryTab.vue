<template>
    <div class='tab' v-on:click='selectIndustry()'>
        <h4>{{ industry.name }}</h4>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    props: {
        industry: Object
    },
    setup(props) {
        const store = useStore()

        return {
            selectIndustry: () => {
                store.commit('selectIndustryId', props.industry.id)
            }
        }
    }
}
</script>

<style>
.tab {
    cursor: pointer;
    padding-top: 0.5rem;
    background-color: var(--background-color-primary);
    height: 4rem;
}

.tab:hover {
    filter: brightness(125%);
}

.tab h4 {
    margin-bottom: 0;
    text-align: center;
}
</style>