const projects = [
  {
    name: "Cataract Classification",
    description: `This project is based on the classification of cataract
        images. The dataset is taken from Kaggle. The dataset
        contains almost 600 images of cataract, retina, glaucoma,
        and normal images. We have oversampled the data by upto 750
        images using data augmentation. We have trained data on 5
        different models and the best accuracy is achieved by the
        KNN classifier. The model is deployed on the web using
        streamlit.`.trim(),
    href: "https://github.com/SajjadAli54/cataract-classification",
    live: "https://huggingface.co/spaces/sajjadali/cataract-app",
    src:
      "https://github-readme-stats.vercel.app/api/pin/?username=SajjadAli54&repo=cataract-classification&theme=dark",
  },
  {
    name: "Country Charm",
    description: `It is a review site related to Food, Hotel and Tour sites.
        It is developed using Reactjs as web engineering semester
        project.`.trim(),
    live: "https://sajjadali54.github.io/countrycharm/",
    href: "https://github.com/SajjadAli54/countrycharm",
    src:
      "https://github-readme-stats.vercel.app/api/pin/?username=SajjadAli54&repo=countrycharm&theme=dark",
  },
  {
    name: "Robo Friends",
    description: `Simple React and Redux based project. It contains the robots
        data from robohash api into cards. It also contains a
        searchfield to search the specific robots.`.trim(),
    live: "https://sajjadali54.github.io/robofriends/",
    href: "https://github.com/SajjadAli54/robofriends",
    src:
      "https://github-readme-stats.vercel.app/api/pin/?username=SajjadAli54&repo=robofriends&theme=blue-green",
  },
  {
    name: "Vidly",
    description: `Simple React app which is used to show movies.`,
    live: "https://sajjadali54.github.io/vidly/",
    href: "https://github.com/SajjadAli54/vidly",
    src:
      "https://github-readme-stats.vercel.app/api/pin/?username=SajjadAli54&repo=vidly&theme=blue-green",
  },
];

const badges = [
  {
    href: "https://github.com/SajjadAli54/",
    src:
      "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    alt: "Github Badge",
  },
  {
    href: "https://www.linkedin.com/in/sajjad-ali-b428b6198/",
    src:
      "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    alt: "LinkedIn Badge",
  },
  {
    href: "https://www.youtube.com/channel/UCXfYIIBvk2e4H60BdKoznRA",
    src:
      "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white",
    alt: "Youtube Badge",
  },
  {
    href: "https://www.hackerrank.com/sajjad_bscsf19",
    src:
      "https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white",
    alt: "HackerRank Badge",
  },
  {
    href: "https://www.kaggle.com/sajjadali786",
    src:
      "https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white",
    alt: "Kaggle Badge",
  },
  {
    href: "https://dev.to/sajjadali54",
    src:
      "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white",
    alt: "Sajjad Ali's DEV Profile",
  },
];

populateProjects();
populateBadges();

function populateProjects() {
  const id = "proj";
  const projectsContainerDiv = document.getElementById(id);

  for (var project of projects) {
    const element = getProjectHtml(project);
    projectsContainerDiv.innerHTML += element;
  }
}

function getProjectHtml(project) {
  return `
      <div class="row">
          <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text load-hidden">
                  <h3 class="project-wrapper__text-title">${project.name}</h3>
                  <div>
                      <p class="mb-4">${project.description}</p>
                  </div>
                  <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn cta-btn--hero"
                      href=${project.live}>See Live</a>
                  <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn text-color-main"
                      href=${project.href}
                  >Source Code</a>
              </div>
          </div>
          <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="#!" target="_blank">
                      <div
                          data-tilt
                          data-tilt-max="4"
                          data-tilt-glare="true"
                          data-tilt-max-glare="0.5"
                          class="thumbnail rounded js-tilt">
  
                          <img
                              alt="Project Image"
                              class="img-thumbnail"
                              src=${project.src}/>
                      </div>
                  </a>
              </div>
          </div>
      </div>
      `;
}

function populateBadges() {
  const badgesDiv = document.getElementById("myBadges");
  for (const badge of badges) {
    const badgeIcon = `
    <a class="col-lg-2 col-sm-6" href=${badge.href}>
        <img
            src=${badge.src}
            alt=${badge.alt}/>
    </a>`;
    badgesDiv.innerHTML += badgeIcon;
  }
}
