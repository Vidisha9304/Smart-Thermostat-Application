async function getTemperature() {
    const response = await fetch('/api/temperature');
    const data = await response.json();
    document.getElementById('temperature').innerText = `Current Temperature: ${data.temperature} °C`;
}

async function controlAppliance(action) {
    const response = await fetch('/api/control', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action })
    });
    const result = await response.json();
    alert(result.status);
}

// Initial call to load temperature
getTemperature();
// Update temperature every 10 seconds
setInterval(getTemperature, 10000);
