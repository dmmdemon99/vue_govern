
<template>
<div>
    <div>新闻详细内容</div>
    <div class="tes" v-for="item in info" :key="item.names" >{{item.title_news}}----{{item.time_news}}
        <p v-html="item.info_news">{{item.info_news}}</p>
    </div>
    
</div>
   
</template>

<script>
    import axios from 'axios';
    import  Vue from 'vue';
   
  

    


    export default {
        name: "Newsa",
        data:function(){
            return {
                info:[],
                temp_id:this.$route.query.id_news,
                urlimg:"http://www.qhdlink-student.top/",
        
            }
        },
        created:function(){

        },
        mounted:function(){
            var id_news=this.temp_id;
    
    var params=new URLSearchParams();
    // params.append("username",window.localStorage.getItem('username'));
    // params.append("userpwd",window.localStorage.getItem('userpwd'));
    // params.append("userclass",window.localStorage.getItem('userclass'));
    // params.append("type",window.localStorage.getItem('type'));

    params.append("username",window.sessionStorage.getItem('username'));
    params.append("userpwd",window.sessionStorage.getItem('userpwd'));
    params.append("userclass",window.sessionStorage.getItem('userclass'));
    params.append("type",window.sessionStorage.getItem('type'));
    params.append("m",id_news);
            axios({
                method:'post',
                url:'http://www.qhdlink-student.top/student/newsinfo.php',
                data:params,
                headers:{ "Content-Type": "application/x-www-form-urlencoded"}
            }) .then((response) =>{
               
                let tempres=response.data;
                let jsonres=tempres;
                this.info=jsonres;
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