import React , {useState} from "react"
// import {key} from "./components/Release"
 function Album(props) { 
     const [play, setPlay] = useState("fa-play")
     
     //create play audio function



     const handlePlay = () => {
        const playCount = 0;
        if(playCount === 0){
            if(play === "fa-play"){
                setPlay("fa-pause")
                var audio = document.querySelector("#audioplayer");
                audio.src = props.audio;
                audio.play();
                //pause last audio whne new audio is played
                // var lastAudio = document.querySelector("#audioplayer");
                // lastAudio.pause();

                
                
            }else{
                setPlay("fa-play")
                var audio = document.querySelector("#audioplayer");
                audio.pause();
                
                
            }
        }
     }
     


    return (
       <div className="container my-4">
           <div id="cards_landscape_wrap-2">
        <div className = "container">
            
                   
                        <div className = "card-flyer">
                            <div className = "text-box">
                                <div className = "image-box">
                                
                                    <img src={props.albumart} alt="" />
                                    <div className="play">
                                        <i onClick = {handlePlay} className={`fa ${play} my-2  mx-auto text-center`} aria-hidden="true"></i>

                                    </div>
                                    
                                    
                                    
                                </div>
                               
                                
                                
                            </div>
                        </div>
                       
                        
                    
                    <div>
                        
                    
                    <audio  controls = "controls" id="audioplayer" src={props.audio} type="audio/mp3"  preload = "automatic"></audio>
                    <p className = "text-center mx-auto my-2 color-black " style = {{textTransform : "uppercase"}}> <b>{props.albumTitle} </b> </p>
                    <p className = "text-center mx-auto  color-red" style = {{textTransform : "uppercase" , color : "peach"}}> {props.artist}  </p>
                    </div>
                    
                
                
               
            
        </div>
        
                   
    </div>
    
                            
           
           </div>
    )
}
export default Album;