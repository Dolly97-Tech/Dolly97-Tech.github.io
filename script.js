// ===== GOOGLE MAP LOAD =====

function loadMap() {

    const mapFrame = document.getElementById("googleMap");

    if(mapFrame){
        mapFrame.innerHTML = `
        <iframe
            src="https://www.google.com/maps?q=Ga%20Manyaka%20Village%20Driekop%201129&output=embed"
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy">
        </iframe>
        `;
    }
}

// Load map after page loads
window.addEventListener("load", loadMap);