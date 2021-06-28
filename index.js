let postsArray = [];

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    postsArray = data.slice(0, 5);
    console.log("postsArray", postsArray);
    renderPosts();
  });

function renderPosts() {
  let posts = postsArray.map((post) => {
    return `<h2 class="post-title">${post.title}</h2><p class="post-body">${post.body}</p><hr />`;
  });
  document.getElementById("posts").innerHTML = posts;
}

document.getElementById("post-button").addEventListener("click", function (e) {
  e.preventDefault();
  const postTitle = document.getElementById("title").value;
  const postBody = document.getElementById("body").value;
  const data = {
    title: postTitle,
    body: postBody,
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((post) => {
      postsArray.unshift({ title: post.title, body: post.body });
      renderPosts();
    });
});
