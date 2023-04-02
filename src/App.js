
import React from "react"



function App(){
  
  
  const audioId = {
        Q: "Heater 1",
        W: "Heater 2",
        E: "Heater 3",
        A: "Heater 4",
        S: "Clap",
        D: "Open-HH",
        Z: "Kick-n'-Hat",
        X: "Kick",
        C: "Closed-HH"
    }

    const audioObj = {
      Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        D: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        Z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        X: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        C: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }

    const objKeys = Object.keys(audioObj)

    
    let [textState, setTextState] = React.useState("000")
    function play(iid){
        let music = document.getElementById(iid);
        music.play();
      setTextState(audioId[iid]);
    }

    const musicButtons = objKeys.map(k=>{
        return (
          <div className="drum-pad col-2 " id={audioId[k]}  key={k} onClick={()=>play(k)}>
            
          <audio id={k} className="clip" src={audioObj[k]}></audio>
          <span className="padText">{k} </span>
          </div>
        )
    })
    
    
    
    
    window.addEventListener("keydown",(event)=>{
    
      if(audioId[event.key.toUpperCase()]){
        
          play(event.key.toUpperCase())
      }
    })
    

    return (
        <div id="drum-machine" className="continer-fluid">
        <p id="display">{textState}</p>
        <i class="fa-solid fa-drum fa-2xl"></i>
        <div className="keyContainer row">
        {musicButtons}
        </div>
        </div>
    )
}

export default App;