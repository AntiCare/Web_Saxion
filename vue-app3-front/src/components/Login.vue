<template>
  <div class = "loginBox" id="loginBox">
    <h2>MySaxion</h2>
    <form method="post" ref="mForm" name="mForm" action="/home"  @submit.prevent="checkLoginFormat">
      <p>Email</p>
      <input name="email" ref="email"   type="text" id="UserEmail"   placeholder="Enter Email" required>
      <p>Password</p>
      <input name="password" ref="password" type="password"  id="UserPassword"  placeholder="Password" required>
      <input type="submit"   value="Sign In">
      <a href="/register">Register account</a>
    </form>
  </div>
</template>

<script>
export default{
  methods: {
    //check the format of email & password input.
    checkLoginFormat:function(){
      var emailInput = document.forms["mForm"]["email"].value;
      var a = emailInput.indexOf("@");
      var b = emailInput.lastIndexOf(".");
      if (a<1 || b<a+2 || b+2 >= emailInput.length){
        alert("Email format error! Please enter the correct email.");
        return false;
      }
      //get the data from form.
      const formData= new FormData(this.$refs['mForm']);
      const data={};
      for(let [key,val] of formData.entries()){
        Object.assign(data,{[key]:val});
      }

      console.log(JSON.stringify(data));
      // use fetch to send data.
      fetch('http://localhost:3000/api/login',{
        method:'post',
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:JSON.stringify(data)
      }).then(res=>res.json())
          .then(data=>{
            //get the respond from backend.
            //if status code:200.
            //jump to home page
            console.log(data)
            window.location.href='/home';
          })
    },
  }
}
</script>

<style scoped>
body
{
  margin: 0;
  padding: 0;
  background-size: cover;
  font-family: sans-serif;
}
.loginBox
{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width:350px;
  height: 420px;
  padding:80px 40px;
  box-sizing: border-box;
  background: rgba(0,0,0,.5);
  border-radius: 10px;
}

h2
{
  margin: 0px;
  padding: 0 0 20px;
  color:#efed40;
  text-align: center;
}
.loginBox p
{
  margin: 0;
  padding: 0;
  font-weight: bold;
  color:#fff;
}
.loginBox input
{
  width:100%;
  margin-bottom:20px;
}
.loginBox input[type="text"],
.loginBox input[type="password"]
{
  border: none;
  border-bottom: 1px solid #ffffff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #ffffff;
  font-size: 16px;
}
::placeholder
{
  color:rgba(255,255,255,.5);
}
.loginBox input[type="submit"]
{
  border: none;
  outline: none;
  height: 40px;
  color:#ffffff;
  font-size: 16px;
  background: #ff267e;
  cursor:pointer;
  border-radius: 20px;
}
.loginBox input[type="submit"]:hover
{
  background: #efed40;
  color: #262626;
}
.loginBox a
{
  color:#efed40;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
}


</style>
