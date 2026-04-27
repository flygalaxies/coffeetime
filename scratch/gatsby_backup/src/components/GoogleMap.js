import * as React from "react";

const GoogleMap = ({ width, height }) => {
  return (
    // <div className="box">
    // <iframe
    //   width={width}
    //   height={height}
    //   id="gmap_canvas"
    //   src="https://maps.google.com/maps?q=Coffee%20Time&t=&z=13&ie=UTF8&iwloc=&output=embed"
    //   frameBorder="0"
    //   scrolling="yes"
    //   marginHeight=""
    //   marginWidth=""
    // ></iframe>
    // </div>
    <iframe
      width={width}
      height={height}
      style={{ border: 0, position: "relative" }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJCc7gOz-flR4RqWX4cRr72xY&key=AIzaSyDvoxdHgix8iwr6jyNmw2RcvWozmwZ6Tz0"
      title="coffeetimeGogoleMaps"
    ></iframe>
  );
};

export default GoogleMap;
