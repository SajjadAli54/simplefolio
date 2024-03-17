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
  postsContainerDiv.innerHTML = `<h2 class="section-title">Blogs</h2>`;
  for (var post of posts) {
    const element = getPost(post);
    postsContainerDiv.innerHTML += element;
  }
};

const getPost = (post) => {
  return `
  <div class="col-md-4 col m-3" height="300px">
  <a href=${post.url}>
    <div class="card cards">
        <img class="card-img-top" src=${post.cover_image} alt=${post.slug}>
        <div class="card-body">
            <h3 class="card-title heading">${post.title}</h3>
        </div>
        <div class="card-footer">
            <a href=${post.url} class="card-link">Read Article</a>  
        </div>
    </div>
    </a>
  </div>
    `;
};

getPosts();
