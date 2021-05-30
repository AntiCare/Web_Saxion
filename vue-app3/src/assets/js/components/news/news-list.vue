<template>
  <div class="container">
    <a href="/news/1">
      <div class="card">
        <div class="imgBx">
          <img src="https://www.academictransfer.com/media/derivatives/logos/saxion-nl-wide/58b971f9248f94f12003cce30f72a669.jpg">
        </div>
        <div class="content">
          <h2>
            Saxion Introduction Days 2021: Saxion Campsite almost open
          </h2>

        </div>

      </div>
    </a>


    <a href="/news/2">
      <div class="card">
        <div class="imgBx">
          <img src="https://media-exp1.licdn.com/dms/image/C510BAQE_HvN6CIm6Nw/company-logo_200_200/0/1579074042825?e=2159024400&v=beta&t=YKMT5LYTh9ObExCF3PyKmB9h3DulUdKmp7CKRAS-10g">
        </div>
        <div class="content">
          <h2>
            Make up your minor! Find out more about our offer now
          </h2>
        </div>

      </div>
    </a>


    <a href="/news/3">
      <div class="card">
        <div class="imgBx">
          <img src="https://www.golfbaanschinkelshoek.nl/images/coronavirus-1_1584096792_bbba44aa.jpg&resolution=200x200">
        </div>
        <div class="content">
          <h2>
            04-05-2021 Corona-update: Request self-tests from May 5
          </h2>
        </div>

      </div>
    </a>



  </div>
</template>

<script>
export default {
  name: "news-list"
}
</script>

<style scoped>
*
{
  margin:0;
  padding:0;
  font-family:'Poppins',sans-serif;
}
body
{
  display:flex;
  justify-content:center;
  align-items: center;
  background:#16384c
}
.container
{
  position:relative;
  width:1100px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  padding:30px;
}
.container .card
{
  position:relative;
  max-width:300px;
  height:215px;
  background:#fff;
  margin: 30px 10px;
  padding: 20px 15px;
  display:flex;
  flex-direction:column;
  box-shadow:0 5px 202px rgba(0,0,0,0.5);
  transition:0.3s ease-in-out;
}
.container .card:hover
{
  height:420px;
}
.container .card .imgBx
{
  position:relative;
  width:260px;
  height:260px;
  top:-60px;
  left:20px;
  z-index:1;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}
.container .card .imgBx .img
{
  max-width:180%;
  border-radius:4px;
}
.container .card .content
{
  position:relative;
  margin-top:-140px;
  padding:10px 15px;
  text-align:center;
  color:#111;
  visibility:hidden;
  opacity:0;
  transition:0.3s ease-in-out;
}
.container .card:hover .content
{
  visibility:visible;
  opacity:1;
  margin-top:-40px;
  transition-delay:0.3s;
}
</style>