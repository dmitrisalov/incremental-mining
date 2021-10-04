<template>
    <div class='header card card-light'>
        <div class='row'>
            <div class='column column-50'>
                <h1>{{ title }}</h1>
            </div>
            <div class='column column-50'>
                <button id='save-button' class='button button-accent'>Save</button>
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
.header .column h1 {
    margin-left: 2rem;
}

.header .column #save-button {
    margin-right: 2rem;
    float: right;
    margin-top: 2rem;
}
</style>