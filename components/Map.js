import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';


function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});
    
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    
    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
          mapStyle='mapbox://styles/lovehog/clcs2eqe4003215nrubhjlfe4'
          mapboxAccessToken={process.env.mapbox_key}
          {...viewport}
          onMove={evt => setViewport(evt.viewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role='img'
                            onClick={() => setSelectedLocation(result)}
                            className='cursor-pointer text-2xl animate-bounce'
                            aria-label='finger pointing to location'
                        >👇</p>
                    </Marker>
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={selectedLocation.lat}
                            longitude={selectedLocation.long}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                
                </div>
            ))}
        </ReactMapGL>
    );
}

export default Map