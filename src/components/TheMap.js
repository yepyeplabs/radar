// @ts-nocheck
import { useMemo } from "react"
import Map, { GeolocateControl, Source, Layer } from "react-map-gl";
import { notionToGeoJSON } from "../data"

const TheMap: React.FC = () => {
  console.log(JSON.stringify(import.meta), "HERE")
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 3,
      'circle-color': '#4ec7b7'
    }
  };

  const data = useMemo(() => {
    const allData = notionToGeoJSON()
    return allData
  }, [notionToGeoJSON()]);

  // get users location to center on that on first load.
  
  return (
     <Map
        style={{height: '100vh', width: '100vw'}}
       mapboxAccessToken={import.meta.env.VITE_MAP_KEY}
       initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
       <Source 
         id="quiktrip-locations"
         type="geojson" 
         data={data} >
       <Layer {...layerStyle} />
       </Source>
    </Map>    
  )
}


export default TheMap;