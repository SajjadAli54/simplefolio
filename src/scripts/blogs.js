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
    for (var post of posts) {
        const element = getPost(post);
        postsContainerDiv.innerHTML += element;
    }
};

const getPost = (post) => {
    return `
    <div class="card">
        <img class="card-img-top" src=${post.cover_image} alt=${post.slug}>
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <a href=${post.url} class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
}

getPosts();