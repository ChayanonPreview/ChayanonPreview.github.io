
	var mymap = L.map('mapid').setView([16.085710, 101.899145], 15);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox/navigation-night-v1',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	L.marker([16.085710, 101.899145]).addTo(mymap)
		.bindPopup("<b>My Home</b>").openPopup();
