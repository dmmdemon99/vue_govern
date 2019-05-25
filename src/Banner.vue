
<template>
<div>
    <div>banner图</div>
    <p class="tes" v-for="item in info" :key="item.names"><img :src="urlimg+item.path_banner"/></p>
    
</div>
   
</template>

<script>
    import axios from 'axios';
    import  Vue from 'vue';
   
  

    

    var params=new URLSearchParams();
    // params.append("username",window.localStorage.getItem('username'));
    // params.append("userpwd",window.localStorage.getItem('userpwd'));
    // params.append("userclass",window.localStorage.getItem('userclass'));
    // params.append("type",window.localStorage.getItem('type'));

     params.append("username",window.sessionStorage.getItem('username'));
    params.append("userpwd",window.sessionStorage.getItem('userpwd'));
    params.append("userclass",window.sessionStorage.getItem('userclass'));
    params.append("type",window.sessionStorage.getItem('type'));


    export default {
        name: "Banner",
        data:function(){
            return {
                info:[],
                urlimg:"http://www.qhdlink-student.top/",
        
            }
        },
        created:function(){

        },
        mounted:function(){
            axios({
                method:'post',
                url:'http://www.qhdlink-student.top/student/banner.php',
                data:params,
                headers:{ "Content-Type": "application/x-www-form-urlencoded"}
            }) .then((response) =>{
               
                let tempres=response.data;
                this.info=tempres;
                console.log(this.urlimg);
                console.log(this.info);
               

            }).catch(function (error) {
                console.log(error);
            });
        },

    }

</script>

<style scoped>
   .ts{
       width:300px;
       height:600px;
   }
   img{
       width:300px;
       height:100px;
   }

</style>