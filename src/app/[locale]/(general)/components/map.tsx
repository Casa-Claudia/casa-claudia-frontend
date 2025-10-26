import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useMemo } from 'react';
// Import the missing module

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? '',
  });
  const center = useMemo(() => ({ lat: 45.33926585744499, lng: 13.59162859673946 }), []);

  return (
    <motion.div className="w-full overflow-hidden rounded-lg" animate="animate" initial="initial">
      {!isLoaded ? (
        <div className="flex items-center justify-center py-4">
          <Loader2 className="text-primary h-5 animate-spin" />
        </div>
      ) : (
        <GoogleMap
          mapContainerClassName="w-full aspect-video z-10"
          center={center}
          zoom={12}
          options={{
            mapId: 'e12a851cb597259f',
            mapTypeControl: false,
          }}
        >
          <Marker position={{ lat: center.lat, lng: center.lng }} />
        </GoogleMap>
      )}
    </motion.div>
  );
}
