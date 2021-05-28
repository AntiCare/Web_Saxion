<template>
  <div class = "registerBox">
    <h2>Register</h2>
    <form method="get" name="mForm" ref="mForm" action="/login" id="myForm" @submit.prevent="checkRegisterFormat">
      <p>Email</p>
      <input type="text" ref="email" name="email" placeholder="Enter Email" required >
      <p>Password</p>
      <input type="password" ref="password" name="password" placeholder="Password" required minlength="3">
      <button>Back to login</button>
    </form>
  </div>
</template>

<script>
export default{
  methods: {
    //check the format of email , password confirm .
    checkRegisterFormat:function(){
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
      fetch('http://localhost:3000/api/register',{
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
            // window.location.href='/login';
          })


    }
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
.registerBox
{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 420px;
  box-sizing: border-box;
  background: rgba(0,0,0,.5);
  width: 525px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;

}
.user
{
  width: 100px;
  height:100px;
  border-radius: 50%;
  overflow:hidden;
  position: absolute;
  top:calc(-100px/2);
  left:calc(50% - 50px);
}
h2
{
  margin: 0px;
  padding: 0 0 50px;
  color:#efed40;
  text-align: center;
}
.registerBox p
{
  margin: 0;
  padding: 0;
  font-weight: bold;
  color:#fff;
}
.registerBox input
{
  width:100%;
  margin-bottom:20px;
}
.registerBox input[type="text"],
.registerBox input[type="password"]
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


button{
  position: relative;
  height: 50px;
  width: 225px;
  margin: 0 90px;
  border-radius: 50px;
  border: none;
  outline: none;
  background: #ff267e;
  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer
}

button:first-child:hover{
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
}


button:last-child:hover{
  background: linear-gradient(90deg, #fa7199, #f5ce62, #e43603, #fa7199);
  background-size: 400%;
}

button:first-child:before,
button:last-child:before{
  content: '';
  position: absolute;
  background: inherit;
  top: -5px;
  right:-5px;
  bottom: -5px;
  left: -5px;
  border-radius: 50px;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s;
}

button:first-child:hover:before,
button:last-child:hover:before{
  opacity: 1;
  z-index: -1;
}

button:hover{
  z-index: 1;
  animation: glow 8s linear infinite;
}

@keyframes glow {
  0%{
    background-position: 0%;
  }
  100%{
    background-position: 400%;
  }
}
</style>
