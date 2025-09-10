import React from "react";

const BgVideo = ({ src }: { src: string }) => {
  return (
    <video>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default BgVideo;
