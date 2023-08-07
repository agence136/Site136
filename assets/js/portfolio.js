let portfolioDisplay = document.querySelector(".portfolio-display");
console.log(portfolioDisplay);


// Afficher l'ensemble des productions
fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        let production = data.production;
        for (let i in production) {
            portfolioDisplay.innerHTML += `    <div class="col-lg-6 col-md-6 mix certified used ${production[i].tag}" style="display: inline-block;" data-bound="">
            <div class="single-portfolio">
            <div style="padding:56.25% 0 0 0;position:relative;">
                <iframe src="${production[i].vimeo}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                title="136 SHOWREEL 2022"></iframe>
                </div>
                <div class="portfolio-content">
                    <div>
                        <span>${production[i].tag}</span>

                        <h3>
                            <a href="production-details.html?id=${production[i].id}">
                                ${production[i].title}
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>`
        }
    });

// Afficher le détail des productions
let portfolioDetail = document.querySelector(".portfolio-detail");
fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        let production = data.production;
        let params = new URLSearchParams(document.location.search);
        let id = params.get("id");
        console.log(id)
        for (let i in production) {
            let productionId = production[i].id;
            if (productionId == id) {
                portfolioDetail.innerHTML += `   <div class="portfolio-details-wrap">
                <div style="padding:56.25% 0 0 0;position:relative;">
                    <iframe src="${production[i].vimeo}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;"
                        title="136 SHOWREEL 2022"></iframe>
                </div>
                <div class="portfolio-content">
                    <div class="row">
                        <div class="col-lg-8">
                            <span>${production[i].tag}</span>
                            <h3>${production[i].client}</h3>
                            <h3>${production[i].title}</h3>
                            <p>${production[i].description}</p>
                        </div>
                    </div>
                </div>
            </div>`
            }
        }
    });



    // <img src="../img/portfolio/${production[i].img}" class="portfolio-image">
    //                 <div class="price-wrap">
    //                     <a href="production-details.html?id=${production[i].id}" >
    //                         <i class="flaticon-play"></i>
    //                     </a>
    //                 </div>
    //             </img>