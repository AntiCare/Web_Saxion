<template>
    <div class="container">
        boo
        <div id="page">
            <transition name="fade">
                <router-view>boo</router-view>
            </transition>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    // export default{
    //     data(){
    //         return{

    //         }
    //     }
    // }
</script>
