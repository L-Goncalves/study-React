import React, {useState} from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

export const MapContainer = (props) => {
  const { google } = props;
  const [map, setMap] = useState(null)

  const searchNearby = (map) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
        location: map.center,
        radius: '20000',
        type: ['restaurant']
    }

    service.nearbySearch(request, (results, status) => {
        if(status === google.maps.places.PlacesService.OK){
            console.log('restaurantes:', results)
        }
    })

  }

  const onMapReady = (_, map) => {
     setMap(map)
     searchNearby(map)
  }
  return (
  <Map google={google} centerAroundCurrentLocation={true}
  onReady={onMapReady}
  onRecenter={onMapReady}
  />);
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt-BR",
})(MapContainer);
