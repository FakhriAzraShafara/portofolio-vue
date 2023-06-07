<template>
  <section class="section-description">
    <div class="container">
      <div class="row">
        <div class="col-md-9 mx-auto">
          <div class="profile">
            <img
              src="../assets/profile-picture.png"
              alt="Profile Picture"
              class="profile-picture"
            />
            <h2 class="profile-name">Fakhri Azra</h2>
            <p class="profile-title">Software Engineer</p>
          </div>

          <div class="">
            <div class="about-me pb-4">
              <h2 class="section-title">About me</h2>
              <ul class="list-unstyled">
                <li class="pb-3">
                  Hi, I'm a <b class="text-light">Developer</b>
                </li>
                <li class="lh-base">
                  <p class="text-justify">
                    I am a professional with excellent communication and
                    critical thinking skills. I thrive in dynamic environments,
                    working well under pressure as part of a team or
                    independently. I am skilled at collaborating with colleagues
                    and have strong time management abilities. As a student of
                    informatic engineering, I have a strong curiosity in website
                    development and have already worked on several projects to
                    nurture my passion. I enjoy staying updated with the latest
                    advancements in technology.
                  </p>
                </li>
              </ul>
            </div>

            <div class="skills pb-4">
              <h2 class="section-title">Skills</h2>
              <ul class="list-unstyled">
                <li>Express.js</li>
                <li>Laravel</li>
                <li>Vue.js</li>
                <li>Unity</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Figma Design</li>
              </ul>
            </div>

            <div class="projects">
              <h2 class="section-title">My Own Projects</h2>
              <ul class="list-unstyled">
                <ol>
                  <ul class="text-bold">
                    <li class="pb-2">
                      <b>Projects (2022):</b> Dummy Website Pemesanan Tiket
                      Kereta (Native), Dummy Website Admin and user role
                      permission (Laravel), Dummy FPS Game (Unity, C#), Dummy
                      Desktop Clinic Aplication (E-clipse, Java)
                    </li>
                    <li>
                      <b>Projects (2023):</b> Portofolio on Basic Native,
                      Portofolio with vue.js, Website Notification Downtime and
                      Call leader (express, vue)
                    </li>
                  </ul>
                </ol>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-description {
  padding: 80px 0;
  color: whitesmoke;
}

.profile {
  text-align: center;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.profile-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.profile-title {
  font-size: 16px;
  color: #777;
  margin-bottom: 30px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.text-justify {
  text-align: justify;
}

.skills ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  margin-top: 10px;
}

.skills li {
  margin-bottom: 5px;
}
</style>
