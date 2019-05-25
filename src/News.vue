
<template>
<div>

  <div id="box">
            <div class="search">
                <input type="text" class="searchBox"  placeholder="搜索" v-model="searchVal">
                <button class="btn" @click="search">搜 索</button>
            </div>
            <!-- <table class="goodsheet">
                <tr>
                <th>商品名</th>
                <th>单价
                <span @click="orderFn('price', false)">↑</span>
                <span @click="orderFn('price', true)">↓</span>
                </th>
                <th>销量
                <span @click="orderFn('sales', false)">↑</span>
                <span @click="orderFn('sales', true)">↓</span>
                </th>
                </tr>
                <tr>{{list}}</tr>
                <tr require-v-for-key='item in list'>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.sales}}万</td>
                </tr>
            </table> -->
  </div>
  <div v-if="searchRes">搜索结果</div>
    <el-table
    :data="result"
    style="width: 100%" v-if="searchRes">
    <el-table-column
      label="标题"
      width="600">
      <template slot-scope="scope">
        <span style="margin-left: 5px">{{ scope.row.title_news}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      width="250">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 5px">{{ scope.row.time_news }}{{scope.row.id_news}}</span>
      </template>
    </el-table-column>
    
    <el-table-column label="操作"  width="300">
      <template slot-scope="scope">
        <el-button
          size="mini"
         ><router-link :to="{path:'/news/newsa',query: { id_news: scope.row.id_news }}">详情</router-link></el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div v-if="!searchRes">新闻列表</div>
   
    <el-table
    :data="info"
    style="width: 100%" v-if="!searchRes">
    <el-table-column
      label="标题"
      width="600">
      <template slot-scope="scope">
        <span style="margin-left: 5px">{{ scope.row.title_news}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      width="250">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 5px">{{ scope.row.time_news }}{{scope.row.id_news}}</span>
      </template>
    </el-table-column>
    
    <el-table-column label="操作"  width="300">
      <template slot-scope="scope">
        <el-button
          size="mini"
         ><router-link :to="{path:'/news/newsa',query: { id_news: scope.row.id_news }}">详情</router-link></el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
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
        
        name: "News",
        data:function(){
            return {
                info:[],
                urlimg:"http://www.qhdlink-student.top/",
                goodsList:[
                  //假数据
                  {name:"三星Galaxy Note8",price:5200,sales:2.6},
                  {name:"iphone5s",price:2500,sales:2.2},
                  {name:"iphone6",price:2800,sales:1.6},
                  {name:"iphone6s",price:3200,sales:2.9},
                  {name:"iphone7",price:3800,sales:12.6},
                  {name:"iphone7plus",price:4200,sales:2.1},
                  {name:"iphone8",price:5500,sales:10.6},
                  {name:"华为",price:4600,sales:7.6},
                  {name:"小米",price:1200,sales:32.6},
                  {name:"OPPOR11",price:3000,sales:1.2},
                  {name:"vivoX20",price:3250,sales:2.9}
                ],
                searchVal:'',    //默认输入为空
                letter:'',       //默认不排序
                original:false,   //默认从小到大排列
                searchRes:false,
                result:[]
        
            }
        },
        created:function(){

        },
        beforeMount:function(){
            axios({
                method:'post',
                url:'http://www.qhdlink-student.top/student/newsa.php',
                data:params,
                headers:{ "Content-Type": "application/x-www-form-urlencoded"}
            }) .then((response) =>{
               
                let tempres=response.data;
                this.info=tempres;
                console.log(this.info);
               

            }).catch(function (error) {
                console.log(error);
            });
        },
      

        methods: {
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          },
          search(){
            this.searchRes=false;
            var arrTemp = [];//声明一个空数组来存放数据
            if(this.info!=""){  
                var tempinfo=Object.values(this.info);
                for (var i=0;i<tempinfo.length;i++){  
                  console.log(tempinfo[i].title_news);         
                  if(tempinfo[i].title_news.indexOf(this.searchVal) != -1){
                  //判断输入框中的值是否可以匹配到数据，如果匹配成功
                  arrTemp.push(tempinfo[i]);
                  //向空数组中添加数据
                  }
                }
                console.log(arrTemp);
                this.searchRes=true;
                if(arrTemp!=""){
                  this.result=arrTemp;

                }else{
                  alert("无符合结果了");
                }
            } else{
              alert(无符合结果);
            }
           
          }
        }
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
    #box{
width: 500px;
height: auto;
border: 1px solid #ccc;
margin: 50px auto;
padding: 10px;
}
.search{
width: 480px;
height: 100px;
text-align: center;
}
.searchBox{
width: 230px;
height: 40px;
outline: none;
text-indent: 10px;
margin-right: 20px;
}
.btn{
width: 100px;
height: 50px;
cursor: pointer;
font-size: 18px;
}
.goodsheet{
width: 500px;
height: auto;
border: 1px solid #eee;
}
.goodsheet tr td,
.goodsheet tr th{
width: 33%;
border: 1px solid #eee;
padding: 5px 10px;
text-align: left;
}
.goodsheet tr th span{
background: #ff9900;
padding: 0 6px;
color: #fff;
cursor: pointer;
}

</style>