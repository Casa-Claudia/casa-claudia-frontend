"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function MapContainer() {
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey="AIzaSyDWpxDQcMf1vIkR8zCqCiZFKk-lImBuGws">
      <div className="h-full w-full">
        <Map zoom={9} center={position} mapId="123">
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}