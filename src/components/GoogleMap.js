import * as React from "react";

const GoogleMap = ({ width, height }) => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width={width}
          height={height}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Coffee%20Time&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
