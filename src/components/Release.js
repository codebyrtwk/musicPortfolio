import React from 'react';
import Album from '../components/Album';

function Release() {

    const release = [
        {
            title: 'MY UNIVERSE',
            artist : "COLDPLAY , BTS , RTWK",
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            audio : "../assets/myuniverse.mp3",
            key: 1
        },
        {
            title: 'My UNIVERSE',
            artist : "COLDPLAY , BTS , RTWK",
            art : "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG",
            audio : "../assets/piano.mp3",
            key: 2
        },
        {
            title: 'My UNIVERSE',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 3
        },
        
    ]
    return (
        <>
        <div className = "container">
            
           
            {/* map all the releases to album component and make in 4 colums*/}
            <div className = "row ">
                {release.map(album =>  (
                    <div className = "col-md-4" key = {album.key}>
                        <Album albumTitle = {album.title} albumart = {album.art} artist = {album.artist} audio = {album.audio}/>
                        </div>
                ))}
            </div>

                        

                
           
            
        </div>
        
        </>  
    )
  
}

export default Release
