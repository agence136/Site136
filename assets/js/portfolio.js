let portfolioDisplay = document.querySelector(".portfolio-display");
console.log(portfolioDisplay);

fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        let production = data.production;
        for (let i in production) {
            portfolioDisplay.innerHTML += `    <div class="col-lg-6 col-md-6 mix certified used ${production[i].tag}" style="display: inline-block;" data-bound="">
            <div class="single-portfolio">
                <div class="portfolio-image bg-1">
                    <div class="price-wrap">
                        <a href="${production[i].vimeo}" >
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



