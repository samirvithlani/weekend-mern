import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = () => {


  //const state = useSelector((state)=>state)
  const cartState = useSelector((state)=>state.cart.cart)
  const bankState = useSelector((state)=>state.bank.balance)
  console.log("state",cartState)
  console.log("state",bankState)
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/amazonhome">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/amazonproduct">Products</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1">formdemo1</Link>
      </li>  
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">formdemo2</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo1">API DEMO 1</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/omdb">OMDB API</Link>
      </li>   
      
      <li class="nav-item">
        <Link class="nav-link" to="/useeffect">useeffect</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo2">apidemo2</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/blogs">blogs</Link>
      </li>   
      <li class="nav-item">
        <Link class="nav-link" to="/prod">products</Link>
      </li>  
      <li class="nav-item">
        <Link class="nav-link" to="/bankcomp">Bank Comp</Link>
      </li>  
      {/* <li class="nav-item">
        CArt{
          cartState?.length
        }
      </li>    */}
      <li class="nav-item">
        Bank Amount: {
          bankState
        }
      </li>   
    </ul>
    
  </div>
</nav>
  )
}
