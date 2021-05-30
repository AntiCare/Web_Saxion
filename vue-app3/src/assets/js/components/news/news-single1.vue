<template>
  <section>
    <h1 id="welcome">Saxion Introduction Days 2021: Saxion Campsite almost open</h1>
    <div class="circle circle2">
      <img src="https://pbs.twimg.com/profile_images/1061931413514137601/iQPHFOvd.jpg">
    </div>
    <p>
      Thinking in terms of what's possible, that is the challenge we still face this year. With the end of the pandemic in sight, the outlook for after the summer is becoming clearer. But how do we ensure that we can give new students a warm welcome as well as organising a safe Introduction? Tricky, but not impossible!

      Together we will make the Introduction Days 2021 unforgettable!
      That's why we are proud to share that on Tuesday, 24th August the online 'Saxion Campsite' goes live for our new students! For three days this online platform will form the basis for all activities during the Introduction Days. We will supplement this with small-scale, in-person introductions, set out as hotspots in the Saxion cities. Students can compile their own programme together with classmates.
      After the positive experiences of last year, we are again aiming to have one Saxion Introduction, with the introduction to degree programmes being part of the introduction programme. All of this is starting to take shape, so above all check the introduction page to stay informed. Here you will find for example, a fun introduction to this year's student organisers.

    <h2>
      Saxion Campsite
    </h2>
    <p>
      For us as organisers of the Introduction Days, is still of course for the time being at least, a case of crystal ball gazing. However, we can already tell you that we are doing our utmost to make the Campsite the place where students can meet each other, embark on adventures together and make memories of a lifetime. Together with everyone who is part of the Saxion Community. #togethersaxion
    </p>
    <h2>
      Questions
    </h2>

    <p>
      Do you have any questions? Then please contact introductie@saxion.nl or check the introduction page for updates.
    </p>

    <a href='/home'>
      <div class="backToHome"  >
        <a class="a-details"  >Back</a>
      </div>
    </a>

  </section>
</template>

<script>
export default {
  name: "news-single1"
}
</script>

<style scoped>
*
{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}
section
{
  position:relative;
  width:100%;
  padding:50px;
}
.circle
{
  position:relative;
  overflow:hidden;
}
.circle img
{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
}

.circle.circle2
{
  width:400px;
  height:400px;
  float:left;
  border-radius:50%;
  margin:20px;
  shape-outside:circle();
}
section h1
{text-align: center;
  color:#F8C471;
  font-size:3em;
  margin-bottom:10px;
  padding:30px;
}
section h2
{
  font-weight:bold;
  color:#138D75;
  font-size:2em;
  padding:30px;
}
section p
{
  color:#52BE80;
  font-size:20px;
  line-height:1.5;
}


.backToHome {
  font-size:2em;
  text-align: center;
  color: white;
  background-color: #F39C12;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px;
  box-shadow: 0 3px 0 0 #D68910;
  letter-spacing: 0.07em;
  transition: all 0.4s ease;
}

@media screen and (max-width: 1068px) {
  .backToHome {
    font-size: 0.95em;
  }
}

@media screen and (max-width: 767px) {
  .backToHome {
    margin-top: 0;
  }
}

@media screen and (max-width: 610px) {
  .backToHome {
    font-size: 0.9em;
    padding: 10px;
  }
}

@media screen and (max-width: 480px) {
  .backToHome {
    font-size: 1em;
    width: 50%;
    margin: 10px auto;
  }
}

.backToHome:hover {
  transform: translateY(-10px);
  box-shadow: 0px 40px 29px -19px rgba(230, 126, 34, 0.9);
}

@media screen and (max-width: 767px) {
  .backToHome:hover {
    transform: none;
    box-shadow: none;
  }

}

.ttt {
  margin-top: 15px;
  display: block;
  text-align: right;

}

.ttt a {
  margin: 0 15px;
}

.backToHome:active {
  box-shadow: inset 0 0 10px 1px #66a564, 0px 40px 29px -19px rgba(102, 172, 100, 0.95);
  transform: scale(0.95) translateY(-9px);
}

@media screen and (max-width: 767px) {
  .backToHome:active {
    transform: scale(0.95) translateY(0);
    box-shadow: none;
  }
}

</style>