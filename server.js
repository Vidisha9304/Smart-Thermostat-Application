const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Simulated temperature variable
let currentTemperature = 25; // Example initial temperature

// Endpoint to get current temperature
app.get('/api/temperature', (req, res) => {
    res.json({ temperature: currentTemperature });
});

// Endpoint to control appliances
app.post('/api/control', (req, res) => {
    const { action } = req.body;
    console.log(`Action received: ${action}`);
    res.json({ status: `Successfully executed ${action}` });
});

// Simulate temperature change and notification
setInterval(() => {
    currentTemperature += Math.floor(Math.random() * 3) - 1; // Random temp change
    if (currentTemperature > 28) {
        console.log("Notify: Room temperature has exceeded 28°C. Please adjust your AC.");
    }
}, 10000); // Check every 10 seconds

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
