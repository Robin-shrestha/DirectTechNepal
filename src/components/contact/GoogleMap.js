import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

const GoogleMap = () => {
  const xMarksTheSpot = { lat: 27, lng: 85 };

  const { ref, map, google } = useGoogleMaps(
    process.env.REACT_APP_GOOGLE_API_KEY,
    {
      center: xMarksTheSpot,
      zoom: 13,
    }
  );
  if (map) {
    new google.maps.Marker({ position: xMarksTheSpot, map });
  }

  return <div ref={ref} style={{ width: "100%", height: 450 }} />;
};

export default GoogleMap;
