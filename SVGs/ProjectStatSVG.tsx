const ProjectStatSVG = ({className}: {className?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="117"
      height="105"
      viewBox="0 0 117 105"
      fill="none"
      className={`${className}`}
    >
      <path
        d="M56.6255 104.063L1.15015 71.5264L59.6748 40.2888L115.15 72.8258L56.6255 104.063Z"
        stroke="#F3EDDE"
        strokeMiterlimit="10"
      />
      <foreignObject x="-11.4733" y="8.3104" width="139.247" height="88.1204">
        <div
          style={{backdropFilter:"blur(5.8px)", clipPath:"url(#bgblur_0_2377_50_clip_path)", height:"100%", width:"100%"}}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="11.6"
        d="M56.6255 84.258L1.15015 51.721L59.6748 20.4834L115.15 53.0204L56.6255 84.258Z"
        fill="#282828"
        fillOpacity="0.4"
        stroke="#F79839"
        strokeMiterlimit="10"
      />
      <path
        d="M56.6255 64.4531L1.15015 31.9161L59.6748 0.678467L115.15 33.2155L56.6255 64.4531Z"
        stroke="#F3EDDE"
        strokeMiterlimit="10"
      />
      <defs>
        <clipPath
          id="bgblur_0_2377_50_clip_path"
          transform="translate(11.4733 -8.3104)"
        >
          <path d="M56.6255 84.258L1.15015 51.721L59.6748 20.4834L115.15 53.0204L56.6255 84.258Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProjectStatSVG;
