
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/hamiltonmoore");
req.addEventListener("load", functionName);
req.send();

function functionName() {
    let data = JSON.parse(this.responseText);

    const basics =

        `<div class="container">
    <div class="header">
    <h1>Hamilton Moore</h1>
    </div>

<div class="threespaces">
<div class="basic_info">
    <h2>Basic Info</h2>
    <div>Name: ${data.name}</div>
    <div>Github URL ${data.url}</div>
    <div>Email: ${data.email}</div>
    <div>Company ${data.company}</div>
    <div>Website ${data.blog}</div>
</div>

<div class="bio">
    <h2>Biography</h2>
    <p>Bio ${data.bio}</p>
</div>

<div class="photo">
    <img  src="${data.avatar_url}" alt="athingy">
</div>
</div>`

    document.querySelector(".wrapper").innerHTML = basics;

}
