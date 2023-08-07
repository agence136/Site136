let portfolioDisplay = document.querySelector(".portfolio-display");
console.log(portfolioDisplay);

// fetch("../data/data.json")
//     .then((response) => response.json())
//     .then((data) => {
//         let production = data.production;
//         console.log(production)



//     });


// fetch("../data/data.json")
//     .then((response) => response.json())
//     .then((data) =>
//         data.map((e) => {
//             portfolioDisplay.innerHTML += `<div class="col-lg-6 col-md-6 mix certified used ${e.tag}" style="display: inline-block;" data-bound="">
//             <div class="single-portfolio">
//                 <div class="portfolio-image bg-1">
//                     <div class="price-wrap">
//                         <a href="https://www.youtube.com/watch?v=dkTYpP6eec0" class="popup-youtube">
//                             <i class="flaticon-play"></i>
//                         </a>
//                     </div>
//                 </div>

//                 <div class="portfolio-content">
//                     <div>
//                         <span>${e.tag}</span>

//                         <h3>
//                             <a href="portfolio-details.html">
//                                 Fighting club
//                             </a>
//                         </h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
// `;
//         })
//     );

fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        let production = data.production;
        for (let i in production) {
            portfolioDisplay.innerHTML += `    <div class="col-lg-6 col-md-6 mix certified used ${production[i].tag}" style="display: inline-block;" data-bound="">
            <div class="single-portfolio">
                <div class="portfolio-image bg-1">
                    <div class="price-wrap">
                        <a href="${production[i].vimeoF}" >
                            <i class="flaticon-play"></i>
                        </a>
                    </div>
                </div>

                <div class="portfolio-content">
                    <div>
                        <span>${production[i].tag}</span>

                        <h3>
                            <a href="portfolio-details.html">
                                ${production[i].title}
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>`
        }



    });



