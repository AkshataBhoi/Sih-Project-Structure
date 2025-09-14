import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {HeatmapLayer} from "react-leaflet-heatmap-layer-v3";
import L from "leaflet";

// small pinpoint icon
const issueIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

export default function Heatmap() {
  // many points across globe
  const issues = [
    { id:1, name:"Road Damage", severity:0.6, coords:[19.076,72.8777], desc:"Potholes." },
    { id:2, name:"Water Logging", severity:1.0, coords:[28.7041,77.1025], desc:"Flooding." },
    { id:3, name:"Air Pollution", severity:0.8, coords:[31.2304,121.4737], desc:"Smog." },
    { id:4, name:"Traffic Jam", severity:0.7, coords:[40.7128,-74.006], desc:"Heavy traffic." },
    { id:5, name:"Water Shortage", severity:0.9, coords:[25.2048,55.2708], desc:"Low reservoirs." },
    { id:6, name:"Flood Risk", severity:0.85, coords:[35.6762,139.6503], desc:"Heavy rains." },
    { id:7, name:"Wildfire Risk", severity:1.0, coords:[-33.8688,151.2093], desc:"High fire risk." },
    { id:8, name:"Waste Management", severity:0.45, coords:[51.5074,-0.1278], desc:"Overfilled bins." },
    { id:9, name:"Water Pollution", severity:0.7, coords:[55.7558,37.6173], desc:"River contamination." },
    { id:10, name:"Garbage Overflow", severity:0.3, coords:[13.0827,80.2707], desc:"Local overflow." },
    // ... add more if you like
  ];

  const heatmapPoints = issues.map(i => ({ lat: i.coords[0], lng: i.coords[1], intensity: i.severity }));

  return (
    <div className="relative h-[88vh] w-full rounded-2xl overflow-hidden shadow-xl">
      <MapContainer
        center={[20, 10]}
        zoom={2}
        scrollWheelZoom={true}
        className="h-full w-full"
        worldCopyJump={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap'
          noWrap={true}
        />

        <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={heatmapPoints}
          longitudeExtractor={p => p.lng}
          latitudeExtractor={p => p.lat}
          intensityExtractor={p => p.intensity}
          radius={60}
          blur={40}
          max={1.0}
          gradient={{
            0.1: "blue",
            0.3: "green",
            0.5: "yellow",
            0.7: "orange",
            0.9: "red",
            1.0: "purple",
          }}
        />

        {issues.map(issue => (
          <Marker key={issue.id} position={issue.coords} icon={issueIcon}>
            <Popup>
              <div className="min-w-[180px]">
                <h3 className="font-bold text-violet-700">{issue.name}</h3>
                <p className="text-sm text-gray-600">{issue.desc}</p>
                <p className="text-xs mt-1">Severity: <strong>{issue.severity > 0.7 ? 'High' : issue.severity > 0.4 ? 'Medium' : 'Low'}</strong></p>
              </div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-md border border-gray-200">
        <h4 className="font-semibold text-gray-700">Issue Density</h4>
        <div className="mt-2 space-y-2 text-sm">
          <div className="flex items-center gap-2"><span className="w-6 h-3 bg-blue-500 rounded"></span> Very Low</div>
          <div className="flex items-center gap-2"><span className="w-6 h-3 bg-green-500 rounded"></span> Low</div>
          <div className="flex items-center gap-2"><span className="w-6 h-3 bg-yellow-400 rounded"></span> Moderate</div>
          <div className="flex items-center gap-2"><span className="w-6 h-3 bg-orange-500 rounded"></span> High</div>
          <div className="flex items-center gap-2"><span className="w-6 h-3 bg-red-600 rounded"></span> Very High</div>
          <div className="flex items-center gap-2"><span className="w-6 h-3 bg-purple-700 rounded"></span> Critical</div>
        </div>
      </div>
    </div>
  );
}
