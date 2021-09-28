import React from 'react'


export default function Navbar(props) {
    return (
        <div className= "container ">
            {/* navbar  */}
            <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent " >
   <div className="container " >
      <a className="navbar-brand py-0 px-0" style={{color:"black" , fontSize : "2em"}} href="/"><b>ऋ</b></a>
      <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
      >
         <i class="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse  "  id="navbarSupportedContent"> 
         <ul className="navbar-nav  mx-auto text-center py-0" >
            <li className="nav-item  ">
               <a className="nav-link active" aria-current="page"style={{color:"black"}} href="/musicreleases"><b>MUSIC RELEASES</b></a>
            </li>
            <li className="nav-item mx-3 my-0 ">
               <a className="nav-link"style={{color:"black"}} href="/blog"><b>BLOG</b></a>
            </li>
            <li className="nav-item ">
               <a className="nav-link"style={{color:"black"}} href="/portfolio"><b>PORTFOLIO</b></a>
            </li>
            
            
         </ul>

         
        
      </div>
   </div>
</nav>

      

        

            
        </div>
    )
}

