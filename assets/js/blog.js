let blogDisplay = document.querySelector(".blog-display");
console.log(blogDisplay);

// Afficher l'ensemble des articles dans la page blog
fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let blog = data.blog;
    console.log(blog);
    for (let i in blog) {
      blogDisplay.innerHTML += `<div class="col-lg-6 col-md-6">
<div class="single-blog">
  <a href="blog-details.html">
    <img src="${blog[i].img}" alt="Image">
  </a>

  <div class="blog-content">
    <ul>
      <li>
        <i class="flaticon-user"></i>
        <a href="#">Admin</a>
      </li>

      <li>
      <i class="fas fa-calendar-day"></i>
        ${blog[i].date}
      </li>
    </ul>

    <a href="blog-details.html">
      <h3>${blog[i].title}</h3>
    </a>

    <p>${blog[i].extrait}</p>

    <a href="blog-details.html?id=${blog[i].id}">
    Lire la suite...
</a>
  </div>
</div>
</div>`;
    }
  });

// Afficher les derniers articles sur la page d'accueil
let blogIndex = document.querySelector(".blog-index");

fetch("assets/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let latest = data.latest;
    console.log(latest);
    for (let i in latest) {
      blogIndex.innerHTML += `<div class="col-lg-6 col-md-6">
<div class="single-blog">
  <a href="blog-details.html">
    <img src="${latest[i].img}" alt="Image">
  </a>

  <div class="blog-content">
    <ul>
      <li>
      <i class="far fa-user"></i>
        <a href="#">Admin</a>
      </li>

      <li>
      <i class="fas fa-calendar-day"></i>
        ${latest[i].date}
      </li>
    </ul>

    <a href="blog-details.html">
      <h3>${latest[i].title}</h3>
    </a>

    <p>${latest[i].extrait}</p>

    
    <a href="assets/html/blog-details.html?id=${latest[i].id}">
    Lire la suite...
</a>
  </div>
</div>
</div>`;
    }
  });

// Afficher le détail des articles sur la page blog-details

let blogDetail = document.querySelector(".blog-details-wrap");
fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let blog = data.blog;
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    console.log(id);
    for (let i in blog) {
      let blogId = blog[i].id;
      if (blogId == id) {
        blogDetail.innerHTML += `  <div class="blog-top-content-wrap">
  <img
    src="${blog[i].img}"
    alt="Image"
  />

  <ul class="post-details">
    <li>
      <i class="bx bx-user"></i>
      By Admin
    </li>
    <li>
      <i class="bx bx-calendar"></i>
      06/21/2020
    </li>

  </ul>

  <h3>${blog[i].title}</h3>

  <p>
  ${blog[i].article}
  </p>



  <blockquote>
    <i class="fa-solid fa-quote-left"></i>
    <p>
    ${blog[i].quote}
    </p>
  </blockquote>


</div>  `;
      }
    }
  });
