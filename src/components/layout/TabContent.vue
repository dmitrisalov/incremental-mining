<template>
    <div class='tab-content dark-background-primary rounded'>
        <div class='row row-title'>
            <div class='column accent-background rounded-top'>
                <h2>{{ title }}</h2>
            </div>
        </div>
        <div class='row row-body'>
            <div class='column'>
                some content here
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
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