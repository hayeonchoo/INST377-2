const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurants = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data));

function findMatches(wordToMatch, restaurants) {
    return restaurants.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.zip.match(regex) || place.category.match(regex) || place.name.match(regex)
    });
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const rName = place.name.replace(regex, '<span class="h1">${this.value}</span>');

        return `
            <li>
            <span class = "name">${rName}</span>
            </li>
        
        `;
    }).join('');
}

const searchInput = document.querySelector('.search');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);