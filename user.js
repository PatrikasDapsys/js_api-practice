const postList = document.querySelector('.post-list');
const id = localStorage.getItem("id");

function onSearchChange(event) {
  console.log(event);
  const id = event.target.value;
  renderPost(id);
}

async function renderPost(id) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const postData = await post.json();

  postList.innerHTML = postData.map((post) => postHTML(post)).join("");
}
renderPost(id);


function postHTML(post) {
  return `
  <div class="post">
  <div class="post__title">
    ${post.title}
  </div>
  <p class="post__body">
    ${post.body}
  </p>
</div>
  `
}
