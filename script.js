const output = document.querySelector(".main");
const url = "https://lassestrand.no/eksamen1/wp-json/wp/v2/posts";


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
        <div class="posts">
        <h2>${post.title.rendered}</h2>
        <p>${post.content.rendered}</p>
        </div>`
    }
    output.innerHTML = list;
}
