import Leaflet from 'leaflet';

import mapMarkedImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkedImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default mapIcon;