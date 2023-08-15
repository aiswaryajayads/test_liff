function searchFlights() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;

    // Mock API call - replace with actual API integration
    const mockResponse = [
        { flightNumber: 'ABC123', departure: 'City A', destination: 'City B', price: 200 },
        { flightNumber: 'DEF456', departure: 'City A', destination: 'City C', price: 250 }
    ];

    displayResults(mockResponse);
}

function displayResults(flights) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    flights.forEach(flight => {
        const flightDiv = document.createElement('div');
        flightDiv.innerHTML = `
            <p>Flight: ${flight.flightNumber}</p>
            <p>From: ${flight.departure}</p>
            <p>To: ${flight.destination}</p>
            <p>Price: $${flight.price}</p>
            <button onclick="bookFlight('${flight.flightNumber}')">Book Now</button>
        `;
        resultsDiv.appendChild(flightDiv);
    });
}

function bookFlight(flightNumber) {
    // Mock booking process - replace with actual booking logic
    alert(`Booking flight ${flightNumber}`);
}

