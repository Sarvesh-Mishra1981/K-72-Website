import React from "react";
import vid from "/Users/sarvesh/Documents/K-72 Website/src/assets/Base.mp4";

const Video = ({ className = "" }) => (
  <div className={className}>
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover block"
    >
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Video;