
<template>
<div>
    <div>登录页面</div>
    <p class="tes">{{info}}</p>
    
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="uName">
    <el-input type="text" v-model="ruleForm2.uName" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="uPass">
    <el-input type="password" v-model="ruleForm2.uPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="班级" prop="uClass">
    <el-input v-model.number="ruleForm2.uClass"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</div>
   
</template>

<script>
    import axios from 'axios';
    import  Vue from 'vue';
   
  



    export default {
        name: "Login",
        data:function(){
            var checkClass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('班级不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            
            callback();
          }
        }, 1000);
      };
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };
            return {
                info:"",
                urlimg:"http://www.qhdlink-student.top/",
                ruleForm2: {
          uName: '',
          uPass: '',
          uClass: ''
        },
        rules2: {
          uName: [
            { validator: validateName, trigger: 'blur' }
          ],
          uPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          uClass: [
            { validator: checkClass, trigger: 'blur' }
          ]
        }
            }
        },
         methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
               var params=new URLSearchParams();
    params.append("username",this.ruleForm2.uName);
    params.append("userpwd",this.ruleForm2.uPass);
    params.append("userclass",this.ruleForm2.uClass);
    params.append("type","2");
             axios({
                method:'post',
                url:'http://www.qhdlink-student.top/student/login.php',
                data:params,
                headers:{ "Content-Type": "application/x-www-form-urlencoded"}
            }) .then((response) =>{
               
                let tempres=response.data;
                this.info=tempres;
                console.log(this.info);
                if(this.info=="ok"){
                //     window.localStorage.setItem('username',this.ruleForm2.uName);
                // window.localStorage.setItem('userpwd',this.ruleForm2.uPass);
                // window.localStorage.setItem('userclass',this.ruleForm2.uClass);
                // window.localStorage.setItem('type',"2");

                 window.sessionStorage.setItem('username',this.ruleForm2.uName);
                 window.sessionStorage.setItem('userpwd',this.ruleForm2.uPass);
                 window.sessionStorage.setItem('userclass',this.ruleForm2.uClass);
                 window.sessionStorage.setItem('type',"2");
                console.log(this.ruleForm2.uName);
                alert("登录提交成功了");
                this.$router.push('/home');
                }else{
                alert('请先注册');
            }
            }).catch(function (error) {
                console.log(error);
            }); 
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
        created:function(){

        },
        mounted:function(){
            
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