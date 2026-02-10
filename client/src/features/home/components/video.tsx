const Video = () => {
    return (
      <div className="flex items-center justify-center border rounded-4xl">
        <video
          src="/video.mp4" // change to your actual video file path
          width={900}
          className=""
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  };
  
  export default Video;