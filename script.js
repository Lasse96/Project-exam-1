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
        <a href="./blog.html?id=${post.id}"><img src="${post._embedded['wp:featuredmedia'][0].source_url}" class="imgposts postimg"></a>
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

const submitted = document.querySelector("#submitted");
const form = document.querySelector(".form");

const yourName = document.querySelector("#namee");
const subject = document.querySelector("#subjectt");
const email = document.querySelector("#emaill");
const message = document.querySelector("#message");

const nameAlert = document.querySelector("#nameAlert");
const subjectAlert = document.querySelector("#subjectAlert");
const emailAlert = document.querySelector("#emailAlert");
const messageAlert = document.querySelector("#messageAlert");

form.addEventListener("submitt", runForm);

function runForm(sub){
    sub.preventDefault();

    let inputName = yourName.value.trim();
    nameAlert.innerHTML = "";
    if (inputName.length < 2){
        nameAlert.innerHTML += "This name is to short";
    }
    if(/\d/.test(inputName)){
        nameAlert.innerHTML += "Don't use digits";
    }

    let inputSubject = subject.value.trim();
    subjectAlert.innerHTML = "";
    if(inputSubject.length < 15){
        subjectAlert.innerHTML += "Must be atleast 15 letters";
    }

    let inputMessage = address.value.trim();
    messageAlert.innerHTML = "";
    if(inputMessage.length < 25){
        messageAlert.innerHTML += "Must be atleast 25 letters";
    }

    let inputEmail = email.value.trim();
    emailAlert.innerHTML = "";
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailPattern.test(inputEmail)) {
        emailAlert.innerHTML += "Enter valid email";
    }

    if (nameAlert.innerHTML === "" && emailAlert.innerHTML === "" && subjectAlert.innerHTML === "" && messageAlert.innerHTML === "") {
        submitted.innerHTML = "The form har been submitted";
        form.submit();
      } else {
        submitted.innerHTML = "You need to fix some errors";
      }
}

