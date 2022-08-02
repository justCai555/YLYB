<template>
    <div id="home_main">
        <div id="l_side">
            hdjashdjk
        </div>
        <div id="r_side">
            <h3>What's new!</h3>
            
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>

<style>
    #home_main{
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: space-around;
    }
    #l_side{
        height: 98%;
        width: 68%;
        display: flex;
    }
    #r_side{
        padding-left: 1%;
        height: 98%;
        width: 28%;
        display: flex;
        flex-direction: column;
        border-left: 0.05em;
        border-color: rgb(66, 68, 70);
        border-style: hidden hidden  hidden solid;
    }
</style>