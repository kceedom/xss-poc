// Test file for Gemini Key Scanner extension
// This key is FAKE and for regex detection testing only

const GOOGLE_MAPS_API_KEY = "AIzaSyA1234567890abcdefghijklmnopqrstuvwxyzAB";

// Simulated Google Maps load
function loadMap() {
    console.log("Loading map with key:", GOOGLE_MAPS_API_KEY);

    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_API_KEY;
    document.head.appendChild(script);
}

loadMap();

