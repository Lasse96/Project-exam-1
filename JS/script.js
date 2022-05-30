const output = document.getElementById("carousel");
const url = "https://lassestrand.no/eksamen1/wp-json/wp/v2/posts?_embed";


fetch(url)
.then (respons => respons.json())
.then (data => listPosts(data))
.catch ((error) => {
    console.error('Error', error);
});


function listPosts(posts){
    let list = "";
    console.log(posts);
    for (let post of posts) {
        list += `
        <div class="post">
        <a href="./blog.html?id=${post.id}"><img src="${post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}" class="imgposts postimg"></a>
        <h2 class="title lesom"><a href="./blog.html?id=${post.id}" class="decor">${post.title.rendered}</a></h2>
        </div>`;
    }
    output.innerHTML = list;
}

carousel = document.getElementById("carousel");

function left() {
  carousel.scrollBy({
    top: 0,
    left: -1020,
    behavior: 'smooth'
  });
}
function right() {
  carousel.scrollBy({
    top: 0,
    left: 1020,
    behavior: 'smooth'
  });
}
