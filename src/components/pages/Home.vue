<template>
    <div id="home">
        {{test}}
        
    </div>
</template>

<script>
    export default{
        data() {
            return {
                test: 'Hello, Home page',
            };
        },
    }

</script>

<style>
    #home{
        display: flex;
        justify-content: space-around;
        background-color: rgb(52, 53, 53, 0.15);
        width: 100%;
        height: 100%;
    }
</style>