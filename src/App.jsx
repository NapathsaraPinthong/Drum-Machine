import './App.css'
import Pad from './pad.jsx'
import { useState } from "react";

function App() {

  const [soundName, setSoundName] = useState('')

  const soundList = [
    {
      name: "Heater-1",
      kb: "Q",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      name: "Heater-2",
      kb: "W",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      name: "Heater-3",
      kb: "E",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      name: "Heater-4",
      kb: "A",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      name: "Clap",
      kb: "S",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      name: "Open-HH",
      kb: "D",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      name: "Kick-n'-Hat",
      kb: "Z",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      name: "Kick",
      kb: "X",
      link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      name: "Closed-HH",
      kb: "C",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ]

  window.addEventListener('keydown', KeyDown)

  function KeyDown(e) {
    const key = e.key.toUpperCase()
    const audio = document.querySelector(`audio[id="${key}"]`)
    if (!audio) return;
    audio.currentTime = 0
    audio.play()
    HandleName(key)
  }

  function HandleName(key) {
    const sName = soundList.filter(sound => sound.kb == key)
    setSoundName(sName[0].name)
  }


  return (
    <>
      <div className="contrainer" id="drum-machine">
        <div className="pad-bank">
          {
            soundList.map(sound => {
              return <Pad {...sound} key={sound.kb} getName={HandleName} />
            })
          }
        </div>
        <div id="display">
          <span>{soundName}</span>
        </div>
      </div>
    </>
  )
}

export default App
