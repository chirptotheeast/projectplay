
import useSound from "use-sound";
import React from "react";
import Cymbal from "../sounds/Cymbal_Groove.mp3";
///Users/aaaeellrssstyy / play / play / src / sounds / Cymbal_Groove.mp3;

 const Sound = () => {
    const [playbackRate, setPlaybackRate] = React.useState(0.75)

    const [play] = useSound(Cymbal, {
        playbackRate, 
        interrupt: true,
    })

    const handleClick = () => {
        setPlaybackRate(playbackRate + 0.1)
        play()
    }

        return (
          <button onClick={handleClick}>
            <span role="img" aria-label="Person with lines near mouth">
              🗣
            </span>
          </button>
        );
    
}

export default Sound
