import React, { useState } from 'react';
import { Slider } from 'react-md';
import ReactPlayer from 'react-player';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  const [volume, setVolume] = useState(50)
  const [playerAPlayed, setPlayerAPlayed] = useState(0)
  const [playerBPlayed, setPlayerBPlayed] = useState(0)

  const handleVolumeChange = (value, event) => {
    setVolume(value)
  }

  const playerAStart = (e) => {
    console.log(e.played);
    setPlayerAPlayed(e.played);
  }

  const playerBStart = (e) => {
    console.log(e.played);
    setPlayerBPlayed(e.played);
  }
  return (
    <div className="app">
      <div className="app__player">
        <CircularProgressbar
          className="app__progress"
          value={playerAPlayed}
          maxValue={1}
        />;
        <ReactPlayer
          className="app__video"
          width='100%'
          height='100%'
          url='https://www.youtube.com/watch?v=vUdcT-if0vo'
          playing
          volume={(100-volume)/100}
          onProgress={(e) => playerAStart(e)}
        />
      </div>
      <div className="app__player">
        <CircularProgressbar
          className="app__progress"
          value={playerBPlayed}
          maxValue={1}
        />;
        <ReactPlayer
          className="app__video"
          width='100%'
          height='100%'
          url='https://www.youtube.com/watch?v=LgF8IVPeR48'
          playing
          volume={volume/100}
          onProgress={(e) => playerBStart(e)}
        />
      </div>
      <div className="app__x-fade">
        <Slider id="continuous-default-value-slider" value={volume} defaultValue={volume} onChange={(value, event) => handleVolumeChange(value, event)} />
      </div>
    </div>
  );
}

export default App;
