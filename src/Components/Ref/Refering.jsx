import  { useRef } from 'react';

function InputBox() {
  // Create a ref for the video element
  const videoRef = useRef(null);

  // Function to play the video
  const playVideo = () => {
    videoRef.current.play();
  };

  // Function to pause the video
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <br />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
}

export default InputBox;
