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
  let newPost = {};
  const postTitle = document.getElementById("title").value;
  const postBody = document.getElementById("body").value;
  newPost.title = postTitle;
  newPost.body = postBody;
  console.log(newPost);
}
