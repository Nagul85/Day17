// Function to create a Bootstrap card with country information
function createCountryCard(countryData) {
    const card = document.createElement('div');
    card.classList.add('col-lg-4', 'col-sm-12');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = countryData.name;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Display the necessary values in the card
    const capital = document.createElement('p');
    capital.textContent = `Capital: ${countryData.capital}`;

    const region = document.createElement('p');
    region.textContent = `Region: ${countryData.region}`;

    const latLng = document.createElement('p');
    latLng.textContent = `Lat/Long: ${countryData.latlng.join(', ')}`;

    const countryName = document.createElement('p');
    countryName.textContent = `Name: ${countryData.name}`;

    const flag = document.createElement('img');
    flag.src = countryData.flag;
    flag.alt = `${countryData.name} Flag`;
    flag.classList.add('flag');

    const countryCodes = document.createElement('p');
    countryCodes.textContent = `Country Codes: ${countryData.alpha2Code}, ${countryData.alpha3Code}`;

    const weatherButton = document.createElement('button');
    weatherButton.classList.add('btn', 'btn-primary');
    weatherButton.textContent = 'Click for Weather';

    // Add click event listener to fetch weather data when the button is clicked
    weatherButton.addEventListener('click', () => {
        // Fetch weather data from OpenWeatherMap API using countryData.alpha2Code
        // Display the weather data in a modal or alert
        // You can implement this part as needed
    });

    cardBody.appendChild(capital);
    cardBody.appendChild(region);
    cardBody.appendChild(latLng);
    cardBody.appendChild(countryName);
    cardBody.appendChild(flag);
    cardBody.appendChild(countryCodes);
    cardBody.appendChild(weatherButton);

    cardElement.appendChild(cardHeader);
    cardElement.appendChild(cardBody);
    card.appendChild(cardElement);

    return card;
}

// Fetch data from REST Countries API
fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
        const countries = data.slice(0, 10); // You can limit the number of countries displayed
        const row = document.querySelector('.row');
        countries.forEach((country) => {
            const card = createCountryCard(country);
            row.appendChild(card);
        });
    })
    .catch((error) => console.error('Error fetching country data:', error));