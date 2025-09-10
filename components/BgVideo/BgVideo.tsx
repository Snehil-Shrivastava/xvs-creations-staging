import './BgVideo.css'

const BgVideo = ({ src }: { src?: string }) => {
  return (
    <video className="-scale-x-100 relative" width="100%" height="100%" autoPlay loop muted>
      <source src={src ? src : '/videos/services.mp4'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BgVideo;
