import LoveBalloon from "./audio/loveballoon.mp3";
import IGotStar from "./audio/igotastar.mp3";
import BuzzBuzz from "./audio/buzzbuzz.mp3";
import React, { Component } from 'react'
import { Howl, Howler } from "howler";

 const audioArray = [
   {sound: LoveBalloon, label: "Going Up" },
   {sound: IGotStar, label: "I Got A" },
   {sound: BuzzBuzz, label: "Buzz" }
 ];

class Music extends Component {
  soundPlay = (src) => {
    const sound = new Howl({
      src
    });
    sound.play();
  };

  renderButtonAndSound = () => {
    return audioArray.map((soundObj, index) => {
      return (<button
        key={index}
        onClick={() => this.soundPlay(soundObj.sound)}
      >
        {soundObj.label}
      </button>
      )
    });
  };
 
  render() {
      Howler.volume(0.8);
    return <div>{this.renderButtonAndSound()}</div>;
  }
}

export default Music
