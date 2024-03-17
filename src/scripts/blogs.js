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
    <div class="card col-4" width="18rem">
        <img class="card-img-top" src=${post.cover_image} width="16rem" alt=${post.slug}>
        <div class="card-body">
            <h3 class="card-title">${post.title}</h3>
            <p class="card-text">${post.tags}</p>
            <a href=${post.url} class="btn btn-primary">Read Article</a>
        </div>
    </div>
    `;
}

getPosts();