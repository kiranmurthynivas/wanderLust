mapboxgl.accessToken = mapToken ;
    
const map = new mapboxgl.Map({
    container: 'map', 
    center: listing.geometry.coordinates,
    zoom: 9
});



const marker2 = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>Excat location will be provided after booking </p>`))
    .addTo(map);