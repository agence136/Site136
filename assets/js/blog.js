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
      Lire la suite...
    </a>
  </div>
</div>
</div>`
        }
    })

let blogIndex = document.querySelector(".blog-index");

fetch("assets/data/data.json")
    .then((response) => response.json())
    .then((data) => {
        let latest = data.latest;
        console.log(latest)
        for (let i in latest) {
            blogIndex.innerHTML += `<div class="col-lg-6 col-md-6">
<div class="single-blog">
  <a href="blog-details.html">
    <img src="${latest[i].img}" alt="Image">
  </a>

  <div class="blog-content">
    <ul>
      <li>
        <i class="flaticon-user"></i>
        <a href="#">Admin</a>
      </li>

      <li>
        <i class="flaticon-calendar"></i>
        ${latest[i].date}
      </li>
    </ul>

    <a href="blog-details.html">
      <h3>${latest[i].title}</h3>
    </a>

    <p>${latest[i].extrait}</p>

    <a href="blog-details.html" class="read-more">
      Lire la suite...
    </a>
  </div>
</div>
</div>`
        }
    })






//     <div class="col-lg-6 col-md-6">
//     <div class="single-blog">
//       <a href="blog-details.html">
//         <img src="assets/img/blog/blog1.png" alt="Image" />
//       </a>

//       <div class="blog-content">
//         <ul>
//           <li>
//             <i class="flaticon-user"></i>
//             <a href="#">Admin</a>
//           </li>

//           <li>
//             <i class="flaticon-calendar"></i>
//             17/07/2020
//           </li>
//         </ul>

//         <a href="blog-details.html">
//           <h3>Web TV Mazars : Un premier prix pour 136 !</h3>
//         </a>

//         <p>
//           Il y a quelques jours, nous recevions le COM-ENT d’argent du
//           prix de la communication disruptive / impertinente pour
//           TheNextCFO, le web TV que nous avons pensée et produite pour
//           le Groupe Mazars.
//         </p>

//         <a href="blog-details.html" class="read-more">
//           Lire la suite
//         </a>
//       </div>
//     </div>
//   </div>






