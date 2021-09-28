
 function Album(props) {
    return (
       <div className="container my-4">
           <div id="cards_landscape_wrap-2">
        <div className = "container">
            
                    <a href="">
                        <div className = "card-flyer">
                            <div className = "text-box">
                                <div className = "image-box">
                                    <img src={props.albumart} alt="" />
                                    <div className="play">
                                        <i className="fa fa-play-circle-o my-2 color-black mx-auto text-center" aria-hidden="true"></i>

                                    </div>
                                    
                                </div>
                               
                                
                                
                            </div>
                        </div>
                    </a>
                    <div>
                    <p className = "text-center mx-auto my-2 color-black " style = {{textTransform : "uppercase"}}> <b>{props.albumTitle} </b> </p>
                    
                    <p className = "text-center mx-auto  color-red" style = {{textTransform : "uppercase" , color : "peach"}}> {props.artist}  </p>
                    </div>
                   
                
                
               
            
        </div>
    </div>
                            
           
           </div>
    )
}
export default Album;