const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-txt");
const clearButton = document.getElementById("clear-btn");

const resultSection = document.createElement("section");
resultSection.classList.add("search-results");
document.querySelector(".search-content").appendChild(resultSection);

searchButton.addEventListener('click', () => {
    const keyword = searchInput.value.trim().toLowerCase();

    fetch('travel_recommendation_api.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            resultSection.innerHTML = '';

            if (keyword.includes('beach')) {
                displayRecommendations(data.beaches);
            } else if (keyword.includes('temple')) {
                displayRecommendations(data.temples);
            } else {
                const country = data.countries.find(c => 
                c.name.toLowerCase().includes(keyword)
                );
                if (country) {
                    displayRecommendations(country.cities);
                } else {
                    resultSection.innerHTML = `<p style="color:white;padding:20px;">No matches found for "${keyword}". Try beach, temple, or a country like Australia.</p>`
                }
            }

        })
        .catch(error => {
            console.log("There was a problem with the fetch operation:", error)
        })
});

function displayRecommendations(locations) {
    locations.slice(0, 2).forEach(location => {
        const card = document.createElement("div");
        card.classList.add("recommendation-card");
        card.innerHTML = `
            <img src="${location.imageUrl}" alt="${location.name}" class="rec-image">
            <div class="rec-text">
                <h3>${location.name}</h3>
                <p>${location.description}</p>
                <button class="btn">Visit</button>
            </div>
        `;
        resultSection.appendChild(card);
    });
}

clearButton.addEventListener('click', ()=> {
    searchInput.value= '';
    document.querySelector(".search-results").innerHTML = '';
    searchInput.focus();
})

