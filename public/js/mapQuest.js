function initMap() {
	// add your code here
	L.mapquest.key='bkEW3qNEGcOMD61eXsvkzxGHW9TdNNjA'
	var map = L.mapquest.map('map', {
		center:[32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoonControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}