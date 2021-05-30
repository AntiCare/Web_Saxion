<template>
  <section>
    <h1 id="welcome">04-05-2021 Corona-update: Request self-tests from May 5</h1>
    <div class="circle circle2">
      <img src="http://storage-o.rgcdn.nl/sitemanagerdata/uploads/newstheme/Dossier_coronavirus.jpg">
    </div>
    <p>
      From Wednesday May 5 it is possible for students and employees to request self-tests. These self-tests are free and you can request free self-tests through the national portal: www.zelftestonderwijs.nl. Use your Saxion account to log in to the portal. The tests will be sent free of charge to the address you provided.
    <h2>
    What is self-testing?
  </h2>
    <p>
      As the name implies, self-testing is a test that you can perform yourself and which gives you a result within 30 minutes. By doing a self-test you help us keep everyone safe in our Saxion-buildings. The self-tests make it easier, and quicker, to trace any possible corona infections. This way we can stop the virus spreading unnoticed. This is why we think it is important to facilitate self-testing.
      Of course we still have to follow all corona safety measures, e.g. keeping 1.5 metres distance, wearing face masks outside class rooms, regularly washing hands, and staying at home in the event of symptoms. Self-testing is an extra measure in addition to the existing corona guidelines already in place at our locations.
    </p>
    <h2>
      Self-testing is voluntary
    </h2>

    <p>
      The use of self-tests is voluntary. You do not need to show a negative result from a self-test to get access to Saxion buildings, and as mentioned earlier, all other corona guidelines remain in place.
    </p>
    <h2>
      Corona-related symptoms? Go to the GGD for a test
    </h2>

    <p>
      A self-test is only used when you have no symptoms that could indicate corona. If you do have symptoms, then you have to stay at home, and make an appointment to get tested at a GGD (Municipal Health Service) test location. Self-testing does not replace a GGD test.
    </p>

    <h2>
      More information
    </h2>

    <p>
      More information on (the use of) self-testing can be found at www.zelftestonderwijs.nl.
    </p>


    <h2>
      All the information about the coronavirus in a clear overview
    </h2>

    <p>
      You can find a clear overview of all the information we have shared during the corona crisis on the corona overview page. On this page you can find an overview of:

      Published news updates concerning corona
      Messages from the Executive Board
      All infographics about corona
      Useful Links
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