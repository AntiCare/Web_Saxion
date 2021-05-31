<template>
  <section>
    <h1 id="welcome">Make up your minor! Find out more about our offer now</h1>
    <div class="circle circle2">
      <img src="https://cdn.synigopulse.com/media2/cms/69543/saxionnl-minoren-banner-3000-x-1500-met-tekst.jpg/?width=1130&height=565">
    </div>
    <p>
      Will you be taking a minor for term 1 and 2 (2021-2022)? Now is the time to discover all possibilities and find out more about our offer. More information about our offer is available online from today on saxion.nl/minors! Which minor do you choose? Make up your minor!
    <h2>
    What is a minor?
    </h2>
    <p>
      A minor is a compulsory six-month elective course worth 30 credits (ECTS). You take a minor after passing your first year examination, usually in the third or fourth academic year of your Bachelor programme.
    </p>
    <h2>
      More information about our minors offer is available online from today
    </h2>

    <p>
      Go to saxion.nl/minors to discover Saxion’s complete minors offer. Here you will find information about all Saxion minors, including details of contact persons.
    </p>
    <h2>
      Prepare yourself thoroughly
    </h2>

    <p>
      Alongside the complete minors offer, saxion.nl/minors contains extensive guidance about types of minors, planning and procedures. You will also find information about taking a minor at another university of applied sciences or transferring to the University of Twente for a follow-up study. This information can help you familiarise yourself with the offer and make your decision.
    </p>

    <h2>
      Apply from Monday 15 March
    </h2>

    <p>
      You can apply for minor programmes starting in the first and second term through Bison or saxion.nl/minors from 19:00 on Monday 15 March. The enrolment window for minor programmes is open until 28 May.
    </p>

    <h2>
      More information
    </h2>

    <p>
      Do you require more information about the minors offer or the enrolment procedure? Get in touch with your study career counsellor, go to saxion.nl/minoren or ask your question at the Servicepoint.

      Good luck with choosing an inspiring minor!
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
  name: 'news-single2'
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
