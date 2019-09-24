<template>
    <div class="container">
        <router-view />
    </div>
</template>
<script>
    export default {
        name: "App"
    }
</script>
<style lang="scss">
    .container {

        .main {
            margin:0;
            padding: 1rem 10% 2rem;
            width: 80%;
            background: #f0f2f5;
            min-height: 1000px;

        }
    }
    body {
        margin:0;
        padding: 0;
    }
    .fr {
        float: right;
    }
    .fl {
        float: left;
    }
</style>
