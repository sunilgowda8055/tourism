import video from "../../video/v1.mp4";

function Video() {
  return (
    <div className="m-3 d-flex justify-content-center align-items-center">
      {video ? (
        <video
          width="70%"
          height="50%"
          allow="autoplay"
          // autoPlay
          muted="muted"
          controls
          // loop
          src={video}
        />
      ) : null}
    </div>
  );
}

export default Video;
