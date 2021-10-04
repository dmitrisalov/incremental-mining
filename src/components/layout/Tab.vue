<template>
    <div class='tab' v-on:click='onTabClick()'>
        <h4>{{ title }}</h4>
    </div>
</template>

<script>
export default {
    props: [
        'title'
    ],
    methods: {
        onTabClick() {
            console.log('test');
        }
    },
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