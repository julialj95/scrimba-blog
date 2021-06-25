fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    console.log(postsArr);
    const div = document.getElementById("posts");
    const posts = postsArr.map(
      (post) => `<h2>${post.title}</h2><p>${post.body}</p><hr />`
    );
    div.innerHTML = posts;
  });
