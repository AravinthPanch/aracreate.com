google.maps.event.addDomListener(window, 'load', init);

function init(){
	var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 40.704130,  lng: -74.012435},
	    zoom: 12,
	    scrollwheel: false,
	    styles: [
	    	{
				elementType: 'geometry',
				stylers: [{color: '#F7F6FC'}]
			},
			{
				elementType: 'labels.icon',
				stylers: [{visibility: 'off'}]
			},
			{
				elementType: 'labels.text.fill',
				stylers: [{color: '#616161'}]
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [{color: '#ededed'}]
			},
			{
				featureType: 'administrative.land_parcel',
				elementType: 'labels.text.fill',
				stylers: [{color: '#bdbdbd'}]
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [{color: '#eeeeee'}]
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{color: '#757575'}]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{color: '#d1eeeb'}]
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9e9e9e'}]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#ffffff'}]
			},
			{
				featureType: 'road.arterial',
				elementType: 'labels.text.fill',
				stylers: [{color: '#757575'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{color: '#E5E3E9'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{color: '#616161'}]
			},
			{
				featureType: 'road.local',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9e9e9e'}]
			},
			{
				featureType: 'transit.line',
				elementType: 'geometry',
				stylers: [{color: '#FFE4E4'}]
			},
			{
				featureType: 'transit.station',
				elementType: 'geometry',
				stylers: [{color: '#eeeeee'}]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{color: '#b0d6f0'}]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{color: '#ffffff'}]
			}
	    ]
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.704130,  lng: -74.012435},
	    map: map,
	    icon: 'assets/images/marker.png'
	});
}