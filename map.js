	//map initialization
	var mymap = L.map('mapid').setView([37.9692566,-91.7908471,], 8);

	//map
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	//loop to plot
	for (var i = 0; i < myData.length; i++) {
		//console.log(myData[i][0]);
	  L.marker([myData[i][0], myData[i][1]]).addTo(mymap).bindPopup(myData[i][2]);;
	}
