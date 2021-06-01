<template>
  <div id="home">

    <!--    <nav class="menu">-->
    <!--      <div class="container">-->
    <!--        <div class="menu__inner">-->
    <!--          <a href="#" class="menu__logo">LOGO</a>-->
    <!--          <div class="menu__buttons">-->
    <!--            <a href="#" class="menu__button menu__button&#45;&#45;active">Home</a>-->
    <!--            <a href="#" class="menu__button">Tab 1</a>-->
    <!--            <a href="#" class="menu__button">Tab 2</a>-->
    <!--            <a href="#" class="menu__button">Tab 3</a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </nav>-->

    <section class="home-content">
      <div class="container">
        <div class="home-content__inner">
          <div class="home-content__left">
            <div class="card card__home-page">
              <div class="card__heading">
                News
              </div>
              <div class="card-home-content">
                <div class="card__post">
                  <div class="post-text">
                    Saxion Introduction Days 2021: Saxion Campsite almost open
                  </div>
                  <a href='/news/1' class="post__btn">Read article</a>
                </div>
              </div>
              <div class="card-home-content">
                <div class="card__post">
                  <div class="post-text">
                    Make up your minor! Find out more about our offer now
                  </div>
                  <a href='/news/2' class="post__btn">Read article</a>
                </div>
              </div>
              <div class="card-home-content">
                <div class="card__post">
                  <div class="post-text">
                    04-05-2021 Corona-update: Request self-tests from May 5
                  </div>
                  <a href='/news/3' class="post__btn">Read article</a>
                </div>
              </div>
              <a href="/news/list" class="card__btn">See all news</a>
            </div>

            <SubjectsCard></SubjectsCard>
            <ExamPreview></ExamPreview>

            <div class="card card__home-page">
              <div class="card__heading">
                Email preview
              </div>
              <div class="email-card__inner">
                <div class="email-item">
                  <div class="email__time">21/06/21 08:30</div>
                  <div class="email__content">
                    <div class="exam__sender">Sender</div>
                    <div class="exam__title">Title</div>
                  </div>
                </div>
                <div class="email-item">
                  <div class="email__time">21/06/21 08:30</div>
                  <div class="email__content">
                    <div class="exam__sender">Sender</div>
                    <div class="exam__title">Title</div>
                  </div>
                </div>
                <div class="email-item">
                  <div class="email__time">21/06/21 08:30</div>
                  <div class="email__content">
                    <div class="exam__sender">Sender</div>
                    <div class="exam__title">Title</div>
                  </div>
                </div>
                <div class="email-item">
                  <div class="email__time">21/06/21 08:30</div>
                  <div class="email__content">
                    <div class="exam__sender">Sender</div>
                    <div class="exam__title">Title</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card__home-page find__card">
              <div class="card__heading">
                Find
              </div>
              <div class="find-card__inner">
                <form action="/" class="find-form">
                  <v-text-field
                    label="Teacher name"
                    placeholder="Dick"
                    color="rgb(255, 255, 255)"
                    outlined
                    filled
                    light
                    rounded
                    dense
                  ></v-text-field>
                </form>
                <div class="find-item">
                  <div class="find-item__image">
                    <img src="https://source.unsplash.com/random/200x150" alt="random photo">
                  </div>
                  <div class="find-item__contact-details">
                    <div class="find-item__text"><strong>Name:</strong> Dick Heijink</div>
                    <div class="find-item__text"><strong>Email:</strong> 470934@student.saxion.nl</div>
                    <div class="find-item__text"><strong>Code:</strong> 470934</div>
                  </div>
                </div>
                <div class="find-item">
                  <div class="find-item__image">
                    <img src="https://source.unsplash.com/random/200x150" alt="random photo">
                  </div>
                  <div class="find-item__contact-details">
                    <div class="find-item__text"><strong>Name:</strong> Dick Heijink</div>
                    <div class="find-item__text"><strong>Email:</strong> 470934@student.saxion.nl</div>
                    <div class="find-item__text"><strong>Code:</strong> 470934</div>
                  </div>
                </div>
                <div class="find-item">
                  <div class="find-item__image">
                    <img src="https://source.unsplash.com/random/200x150" alt="random photo">
                  </div>
                  <div class="find-item__contact-details">
                    <div class="find-item__text"><strong>Name:</strong> Dick Heijink</div>
                    <div class="find-item__text"><strong>Email:</strong> 470934@student.saxion.nl</div>
                    <div class="find-item__text"><strong>Code:</strong> 470934</div>
                  </div>
                </div>
                <div class="find-item">
                  <div class="find-item__image">
                    <img src="https://source.unsplash.com/random/200x150" alt="random photo">
                  </div>
                  <div class="find-item__contact-details">
                    <div class="find-item__text"><strong>Name:</strong> Dick Heijink</div>
                    <div class="find-item__text"><strong>Email:</strong> 470934@student.saxion.nl</div>
                    <div class="find-item__text"><strong>Code:</strong> 470934</div>
                  </div>
                </div>
                <div class="find-item">
                  <div class="find-item__image">
                    <img src="https://source.unsplash.com/random/200x150" alt="random photo">
                  </div>
                  <div class="find-item__contact-details">
                    <div class="find-item__text"><strong>Name:</strong> Dick Heijink</div>
                    <div class="find-item__text"><strong>Email:</strong> 470934@student.saxion.nl</div>
                    <div class="find-item__text"><strong>Code:</strong> 470934</div>
                  </div>
                </div>

              </div>
            </div>
            <div class="card card__home-page">
              <div class="card__heading">
                Subjects
              </div>
              <div class="grades-years">
                Year 1 | Year 2 | Year 3 | Year 4
              </div>
              <div class="progress-bar-section">
                <div class="progress-bar">
                  <div class="progress-bar__outer"></div>
                  <div class="progress-bar__inner"></div>
                </div>
                <div class="spider-map-btn">
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>

              <div class="grades__inner">
                <div class="grade">
                  <div class="subject-name">
                    dev tools
                  </div>
                  <div class="grade-result">
                    10
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="home-content__right">
            <div class="card card__home-page schedule-card">
              <div class="card__heading">
                Schedule
              </div>
              <div class="schedule__inner">
                <div class="schedule-item">
                  <div class="schedule__time">8:30</div>
                  <div class="schedule__subject">Dev tools</div>
                </div>
                <div class="schedule-item">
                  <div class="schedule__time">8:30</div>
                  <div class="schedule__subject">Dev tools</div>
                </div>
                <div class="schedule-item">
                  <div class="schedule__time">8:30</div>
                  <div class="schedule__subject">Dev tools</div>
                </div>
                <div class="schedule-item">
                  <div class="schedule__time">8:30</div>
                  <div class="schedule__subject">Dev tools</div>
                </div>
                <div class="schedule-item">
                  <div class="schedule__time">8:30</div>
                  <div class="schedule__subject">Dev tools</div>
                </div>
                <div class="schedule-item">
                  <div class="schedule__time">8:30</div>
                  <div class="schedule__subject">Dev tools</div>
                </div>
                <div class="schedule-item">
                  <div class="schedule__time">8:30</div>
                  <div class="schedule__subject">Dev tools</div>
                </div>
                <div class="schedule-item">
                  <div class="schedule__time">8:30</div>
                  <div class="schedule__subject">Dev tools</div>
                </div>
              </div>
              <a href="#" class="card__btn">See entire schedule</a>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import SubjectsCard from '@/components/home-page/Subjects-card'
import ExamPreview from '@/components/home-page/Exam-card'

export default {
  components: { SubjectsCard, ExamPreview }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

:root {
  --main-gray: #a2a2a2;
  --main-lightgray: #c4c4c4;
  --green: #15A563;
  --main-dark: #434343;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
  color: inherit !important;
}

.container {
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
}

.menu {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}

.menu__inner {
  width: 100%;
  display: flex;
  padding-top: 20px;
}

.menu__logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.menu__buttons {
  display: flex;
  margin: 0 15px;
}

.menu__button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: white;
  background-color: var(--main-gray);;
  border: 1px solid black;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.menu__button--active {
  background-color: var(--main-lightgray);;

}

.home-content {
  display: flex;
  align-items: center;
  padding-top: 20px;
  background-color: #e8ffea;
  padding-bottom: 150px;
}

.home-content__inner {
  display: flex;
  justify-content: space-between;
}

.home-content__left {
  width: 100%;
  display: grid;
  grid-template:
            "a b c"
            "d e f";
  grid-column-gap: 15px;
  row-gap: 15px;
}

.home-content__right {
  /*width: 30%;*/
  display: flex;
  justify-content: space-evenly;
  padding-left: 15px;
}

.card {
  width: 260px;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  text-transform: uppercase;
  background-color: var(--main-dark);
}

.card__heading {
  width: 100%;
  padding: 5px 0 5px 5px;
  font-size: 18px;
  font-weight: bold;
  color: var(--green);
  background-color: var(--main-lightgray);
}

.card-home-content {
  padding: 4px;
  color: white;
  font-size: 20px;
}

.card__post {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4px;
  color: white;
  background-color: var(--green);
}

.post-text {
  padding: 2px;
  font-size: 14px;
}

.post__btn, .card__btn {
  width: 150px;
  padding: 2px;
  margin: 0 auto;
  color: white !important;
  font-size: 14px;
  text-align: center;
  background-color: var(--main-lightgray);
}

.card__btn {
  margin-top: 10px;
}

.card__subjects {
  color: white;

}

.subjects-quartiles, .grades-years {
  min-height: 22px;
  padding-top: 2px;
  text-align: center;
  color: white;
  font-size: 14px;
}

.subject-item, .exam-item, .email-item, .schedule-item, .find-item, .grade {
  margin: 0 5px 5px 5px;
  padding: 15px 5px;
  font-size: 14px;
  font-weight: bold;
  background-color: var(--green);
}

.exam-card__inner, .email-card__inner, .schedule__inner, .find-card__inner {
  margin-top: 5px;
}

.exam-item, .schedule-item {
  height: 65px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
}

.email-item {
  height: 65px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
}

.exam__time, .email__time, .schedule__time {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2px 0 0 5px;
  font-size: 12px;
}

.email__time {
  top: 0;
}

.email__content {
  margin: 5px;
}

.schedule-card {
  padding-bottom: 10px;
}

.find-form {
  position: relative;
  margin: 2px 0 2px 0;
  color: #ffffff;
}

/*.find-form input {*/
/*  background-color: transparent;*/
/*  border: 3px solid black;*/
/*  border-radius: 15px;*/
/*}*/

.find__card {
  align-items: center;
}

.find_label {
  position: absolute;
  width: 120px;
  height: 30px;
  top: 7px;
  left: 26px;
  color: white;
  font-size: 12px;
}

.find-item {
  width: 96%;
  height: 100%;
  padding-top: 10px;
  position: relative;
  display: flex;
  color: white;
}

.find-card__inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.find-item__image {
  max-width: 60px;
}

.find-item img {
  width: 100%;
}

.find-item__contact-details {
  margin-left: 10px;
}

.find-item__text {
  font-size: 12px;
}

.grades-years {
  font-size: 14px;
}

.progress-bar-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}

.progress-bar {
  position: relative;
  width: 100%;
  padding-right: 5px;
  background-color: transparent;
}

.progress-bar__outer {
  width: 100%;
  height: 20px;
  background-color: white;
  border: 1px solid black;
}

.progress-bar__inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 20px;
  background-color: red;
  border: 1px solid black;

}

.spider-map-btn {
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: black;
}

.grades__inner {
  display: flex;
  flex-direction: column;
}

.grade {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  color: white;
  font-size: 14px;
}

.v-input__control {
  max-height: 50px;
  color: white;

}

.v-input__control input {
  color: white;
}

.v-input input {
  color: white;
}

.v-text-field__slot input {
  color: rgb(255, 255, 255) !important;
  font-size: 14px !important;
}

.v-text-field__slot input::placeholder {
  color: rgb(190, 181, 181) !important;
  font-size: 14px !important;
}

.v-input__slot fieldset {
  color: rgb(255, 255, 255) !important;
}

.v-text-field__slot .v-label {
  color: rgb(255, 255, 255) !important;
  opacity: 1;
  font-size: 12px !important;
  font-weight: bold !important;
}

/* On screens that are 1116px or less */
@media screen and (max-width: 1116px) {
  .home-content__left {
    grid-template:
        "a b"
        "c d"
        "e f";
  }
}

/* On screens that are 884px or less */
@media screen and (max-width: 884px) {
  .home-content__left {
    grid-template: none
  }
}

/* On screens that are 570px or less */
@media screen and (max-width: 570px) {
  .home-content__inner {
    flex-direction: column-reverse;
    align-items: center;
  }

  .home-content__left {
    width: auto;
  }

  .home-content__right {
    padding: 0 0 15px 0;

  }
}
</style>
