const output = document.getElementById("blogoutput");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
if (id == null)
{
    const url = "https://lassestrand.no/eksamen1/wp-json/wp/v2/posts?_embed";


    fetch(url)
        .then (respons => respons.json())
        .then (data => listPosts(data))
        .catch ((error) => {
            console.error('Error', error);
        }
    );


    function listPosts(posts){
        let list = "";
        let button = "";
        console.log(posts);
        for (let post of posts) {
            list += `
            <div class="post">
            <a href="./blog.html?id=${post.id}"><img src="${post._embedded['wp:featuredmedia'][0].source_url}" class="imgposts postimg"></a>
            <h2 class="title lesom"><a href="./blog.html?id=${post.id}" class="decor">${post.title.rendered}</a></h2>
            </div>`
        }
        button = `<div id="loadmore">
        <button id="loadm" onclick="loadMore()">Load More</button>
        </div>`
        output.innerHTML = list + button;
    }
}
else {

const url = "https://lassestrand.no/eksamen1/wp-json/wp/v2/posts/" + id;

fetch(url)
    .then (respons => respons.json())
    .then (data => listPost(data))
    .catch ((error) => {
        console.error('Error', error);
    }
);


    function listPost(post){
        console.log(post);
        output.innerHTML = `
            <div class="blogspes">
                <h2 class="greek3">${post.title.rendered}</h2>
                <div class="stylep">
                    ${post.content.rendered}
                </div>
            </div>
            `
            document.querySelector(".alignright").addEventListener("click", modal);
    }
    
}

function modal(e){
console.log(e);
}

function loadMore() {
    const url = "https://lassestrand.no/eksamen1/wp-json/wp/v2/posts?_embed&page=2";


    fetch(url)
        .then (respons => respons.json())
        .then (data => listPosts(data))
        .catch ((error) => {
            console.error('Error', error);
        }
    );


    function listPosts(posts){
        let removeLoad = document.getElementById("loadmore");
        output.removeChild(removeLoad);
        let list = "";
        console.log(posts);
        for (let post of posts) {
            list += `
            <div class="post">
            <a href="./blog.html?id=${post.id}"><img src="${post._embedded['wp:featuredmedia'][0].source_url}" class="imgposts postimg"></a>
            <h2 class="title lesom"><a href="./blog.html?id=${post.id}" class="decor">${post.title.rendered}</a></h2>
            </div>`
        }
        output.innerHTML += list;
    }
}