const certifications = [
  { src: "assets/certs/vcs.png", alt: "Version Control Systems" },
  { src: "assets/certs/ml.jpg", alt: "Machine Learning with Python" },
];

const populateCertifications = () => {
  const indicators = document.getElementById("carousel-indicators");
  const inner = document.getElementById("carousel-inner");

  certifications.forEach((cert, index) => {
    indicators.innerHTML += `
              <button type="button" data-bs-target="#certificationsCarousel" data-bs-slide-to="${index}" 
                  class="${index === 0 ? "active" : ""}" aria-label="Slide ${index + 1}"></button>
          `;
    inner.innerHTML += `
              <div class="carousel-item ${index === 0 ? "active" : ""}">
                  <img src="${cert.src}" class="d-block" alt="${cert.alt}">
              </div>
          `;
  });
};

document.addEventListener("DOMContentLoaded", populateCertifications);

const url = "https://dev.to/api/articles?username=sajjadali";

const getPosts = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    setPosts(json);
  } catch (error) {
    console.log("error", error);
  }
};

const setPosts = (posts) => {
  const postsContainerDiv = document.getElementById("blogs");
  postsContainerDiv.innerHTML = `<h2 class='section-title'>Blogs</h2><div class="row"></div>`;
  const rowDiv = postsContainerDiv.querySelector(".row");
  for (const i in posts) {
    if (i == posts.length - 1) return;
    post = posts[i];
    const element = getPost(post);
    rowDiv.innerHTML += element;
  }
};

const getPost = (post) => {
  return `
<div class="col-md-4 col-sm-12 mb-4">
  <div class="card project-card h-100">
      <img src="${post.cover_image}" class="card-img-top" alt="${post.slug}">
      <div class="card-body d-flex flex-column">
          <h5 class="card-title">${post.title}</h5>
          <div class="mt-auto">
              <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
          </div>
      </div>
  </div>
</div>`;
};

const projects = [
  {
    name: "Country Charm",
    description:
      "It is a review site related to Food, Hotel and Tour sites. Developed as a web engineering semester project using React.js.",
    live: "https://sajjadali54.github.io/countrycharm/",
    href: "https://github.com/SajjadAli54/countrycharm",
    src: "file:///C:/Users/SajjadAli/Documents/Codes/Personal/Web/simplefolio/src/assets/projects/countrycharm.png",
    // src: "https://github-readme-stats.vercel.app/api/pin/?username=SajjadAli54&repo=countrycharm&theme=dark",
  },
  {
    name: "Robo Friends",
    description: `Simple React and Redux based project. It contains the robots
  data from robohash api into cards. It also contains a
  searchfield to search the specific robots.`.trim(),
    live: "https://sajjadali54.github.io/robofriends/",
    href: "https://github.com/SajjadAli54/robofriends",
    src: "https://robohash.org/3?200x200",
    // src: "https://github-readme-stats.vercel.app/api/pin/?username=SajjadAli54&repo=robofriends&theme=blue-green",
  },
  {
    name: "Vidly",
    description: `Simple React app which is used to show movies.`,
    live: "https://sajjadali54.github.io/vidly/",
    href: "https://github.com/SajjadAli54/vidly",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLGbzwK8xGCsUQvhfEby57Qm5gULxckCI2Q&s",
    // src: "https://github-readme-stats.vercel.app/api/pin/?username=SajjadAli54&repo=vidly&theme=blue-green",
  },
];

const populateProjects = () => {
  const projectsContainerDiv = document.getElementById("proj");

  for (const project of projects) {
    const element = getProjectHtml(project);
    projectsContainerDiv.innerHTML += element;
  }
};

const getProjectHtml = (project) => {
  return `
      <div class="col-md-4 col-sm-12 col-lg-4 mb-4">
          <div class="card project-card h-100">
              <img src="${project.src}" class="card-img-top" alt="Project Image">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${project.name}</h5>
                  <p class="card-text">${project.description}</p>
                  <div class="mt-auto">                        
                    <a href="${project.live}" target="_blank" class="btn btn-success">Live Demo</a>
                    <a href="${project.href}" target="_blank" class="btn btn-secondary">Source Code</a>
                  </div>
              </div>
          </div>
      </div>`;
};

const badges = [
  {
    href: "https://github.com/SajjadAli54/",
    src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    alt: "Github Badge",
  },
  {
    href: "https://www.linkedin.com/in/sajjad-ali-b428b6198/",
    src: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    alt: "LinkedIn Badge",
  },
  {
    href: "https://www.youtube.com/channel/UCXfYIIBvk2e4H60BdKoznRA",
    src: "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white",
    alt: "Youtube Badge",
  },
  {
    href: "https://dev.to/sajjadali54",
    src: "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white",
    alt: "Sajjad Ali's DEV Profile",
  },
];

const populateBadges = () => {
  const badgesDiv = document.getElementById("myBadges");
  for (const badge of badges) {
    badgesDiv.innerHTML += `
          <a href="${badge.href}" target="_blank">
              <img src="${badge.src}" alt="${badge.alt}" />
          </a>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getPosts();
  populateProjects();
  populateBadges();
});
