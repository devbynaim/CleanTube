import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

function Home() {
  const [player, setPlayer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = '9dUjEXjEX64';

  const opts = {
    height: '390',
    width: '640',
  };

  const jumpToTime = (timeInSeconds) => {
    if (player) {
      player.seekTo(timeInSeconds);
    }
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onPlay = () => {
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
    if (player) {
      setCurrentTime(player.getCurrentTime());
    }
  };

  const onProgress = (event) => {
    setCurrentTime(event.target.getCurrentTime());
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onProgress={onProgress}
        onStateChange={()=>{console.log("something is changed");}}
        
        
      />
      <div>
        <p>Current Time: {formatTime(currentTime)}</p>
      </div>
    </div>
  );
}



export default Home