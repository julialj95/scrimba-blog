let postsArray = [];
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const form = document.getElementById("new-post");

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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    title: titleInput.value,
    body: bodyInput.value,
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
      // titleInput.value = "";
      // bodyInput.value = "";
      form.reset();
    });
});
