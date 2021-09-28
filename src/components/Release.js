import React from 'react';
import Album from '../components/Album';

function Release() {

    const release = [
        {
            title: 'MY UNIVERSE',
            artist : "COLDPLAY , BTS , RTWK",
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 1
        },
        {
            title: 'My UNIVERSE',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 2
        },
        {
            title: 'My UNIVERSE',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 3
        },
        {
            title: 'My',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 3
        },
        {
            title: 'My',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 3
        },
        {
            title: 'My',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 3
        },
        {
            title: 'My',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 3
        },
        {
            title: 'My',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 3
        },
        {
            title: 'My',
            art : "https://static.stereogum.com/uploads/2021/09/coldplay-bts-my-universe-1632439547-1000x1000.jpg",
            key: 3
        },
    ]
    return (
        <>
        <div className = "container">
            
           
            {/* map all the releases to album component and make in 4 colums*/}
            <div className = "row">
                {release.map(album => (
                    <div className = "col-md-4" key = {album.key}>
                        <Album albumTitle = {album.title} albumart = {album.art} artist = {album.artist}/>
                        </div>
                ))}
            </div>

                        

                
           
            
        </div>
        
        </>  
    )
  
}

export default Release
