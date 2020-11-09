const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurants = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data))

function findMatches(wordToMatch, restaurants) {
    return restaurants.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.zip.match(regex) || place.catgory.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(place => {
        return `
            
        
        `;
    });
}

const serachInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);