import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
     
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="img/logo.png" width={70} alt="Logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
  
      
        
        <Link to="/" class="nav-link active mx-5" >Home</Link>
    
      
     
    
  
      <Link to="/users" class="nav-link mx-5">Users</Link>
     


    </div>
  </div>
</nav>
      
    </>
  )
}

export default Nav
