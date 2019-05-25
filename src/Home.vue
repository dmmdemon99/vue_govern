
<template>
<div>

   <h3 class="msgs" v-if="uinfo">{{msg}}</h3>
   <h3 class="msgs" v-else>请登录后继续</h3>
    
</div>
   
</template>

<script>
   
    import  Vue from 'vue';
   
  

   
    
   

    export default {
        name: "Home",
        data:function(){
            return {
                msg:"欢迎进入后台管理系统",
               // uinfo : window.localStorage.getItem('username'),
                uinfo : window.sessionStorage.getItem('username'),
            }
        },
        created:function(){

        },
        mounted:function(){
        }
    }

</script>

<style scoped>
.msgs{
    text-align: center;
    color:aqua;
    font-size: 30px;
    line-height: 120px;
}

</style>