import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapSection = () => {
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCInJlAGI-ysLe84IJt4F8R_uFpdsmljCE",
      version: "weekly",
    });

    let map;
    loader.load().then((google) => {
      map = new google.maps.Map(googlemap.current, {
        center: { lat: -8.495821208737958, lng: 115.27386387572854 },
        zoom: 12,
      });
      const poolshop = { lat: -8.495821208737958, lng: 115.27386387572854 };
      const marker = new google.maps.Marker({
        position: poolshop,
        map: map,
      });
      marker.addListener("click", () => {
        window.open(
          "https://www.google.com/maps/place/POOL+SHOP+SURYA+JAYA+TEKNIK/@-8.495991,115.2714606,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd23fc703a6088d:0x639dbd3a3ba29528!8m2!3d-8.4959911!4d115.2736131",
          "_blank"
        );
      });
    });
  });
  return (
    <div>
      <section id="googlemap">
        <div id="map" ref={googlemap} />
      </section>
    </div>
  );
};

export default MapSection;
