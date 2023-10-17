let portfolioDisplay = document.querySelector(".portfolio-display");
console.log(portfolioDisplay);

fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        let production = data.production;
        for (let i in production) {
            let content;
            if (production[i].type === "video") {
                content = `
                    <div style="padding:56.25% 0 0 0;position:relative;">
                        <iframe src="${production[i].vimeo}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;"
                        title="${production[i].title}"></iframe>
                    </div>
                `;
            } else if (production[i].type === "photo") {
                content = `
                    <img src="../img/site-internet/${production[i].photo}" alt="${production[i].title}">
                `;
            }

            portfolioDisplay.innerHTML += `
                <div class="col-lg-6 col-md-6 mix certified used ${production[i].tag}" style="display: inline-block;" data-bound="">
                    <div class="single-portfolio">
                        ${content}
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
                </div>
            `;
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
        for (let i in production) {
            let productionId = production[i].id;
            if (productionId == id) {
                let content;
                if (production[i].type === "video") {
                    content = `
                        <div style="padding:56.25% 0 0 0;position:relative;">
                            <iframe src="${production[i].vimeo}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                title="${production[i].title}"></iframe>
                        </div>
                    `;
                } else if (production[i].type === "photo") {
                    content = `
                        <img src="../img/site-internet/${production[i].photo}" alt="${production[i].title}">
                    `;
                }

                portfolioDetail.innerHTML += `   <div class="portfolio-details-wrap">
                    ${content}
                    <div class="portfolio-content">
                        <div class="row">
                            <div class="col-lg-8">
                                <span>${production[i].tag}</span>
                                <h3>${production[i].client}</h3>
                                <h3>${production[i].title}</h3>
                                <p>${production[i].description}</p>
                            </div>
                            <div class="col-lg-4">
                                <div class="portfolio-date">
                                    <ul class="date-wrap">
                                        <li>Date <span>:</span></li>
                                        <li>Other Info <span>:</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }
    });



