fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    console.log(postsArr);
    const postsDiv = document.getElementById("posts");
    const posts = postsArr.map(
      (post) =>
        `<h2 class="post-title">${post.title}</h2><p class="post-body">${post.body}</p><hr />`
    );
    postsDiv.innerHTML = posts;
  });

document.getElementById("post-button").addEventListener("click", createPost);

function createPost(e) {
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
    .then((data) => console.log(data));
}
