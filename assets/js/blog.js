let blogDisplay = document.querySelector(".blog-display");
console.log(blogDisplay);

// Afficher l'ensemble des articles
fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        let blog = data.blog;
        console.log(blog)
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
        <i class="flaticon-calendar"></i>
        ${blog[i].date}
      </li>
    </ul>

    <a href="blog-details.html">
      <h3>${blog[i].title}</h3>
    </a>

    <p>${blog[i].extrait}</p>

    <a href="blog-details.html" class="read-more">
      Learn More
    </a>
  </div>
</div>
</div>`
        }
    })






