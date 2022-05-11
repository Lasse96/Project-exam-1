const output = document.querySelector(".blogoutput");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://lassestrand.no/eksamen1/wp-json/wp/v2/posts/" + id;

fetch(url)
.then (respons => respons.json())
.then (data => listPosts(data))
.catch ((error) => {
    console.error('Error', error);
});


function listPosts(post){
    const title = post.title.rendered;
    
    output.innerHTML += `
        <a href= "${post.featured_media}"></a>
        <h2>${post.title.rendered}</h2>
        <a href="./blog.html?id=${post.id}">Les om ${post.title.rendered}</a>`
}