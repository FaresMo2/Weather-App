import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

function WeatherMap() {
  return (
    <div className="relative flex-1 h-full border rounded-md border-br">
      <button className="absolute z-[1000] block px-6 py-3 text-base font-bold text-white transition -translate-x-1/2 bg-black border-none cursor-pointer uppercasez-50 bottom-8 left-1/2">
        Get MY Address
      </button>
      <MapContainer
        style={{ height: "100%", width: "100%" }} // Ensure height and width are set
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default WeatherMap;
