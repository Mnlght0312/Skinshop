import React from 'react';
import { NavLink, Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";

function Header() {
  return (
    <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p className='text-white mb-0'>Fast & Safe skin sales </p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white mb-0'>Mobile: (+976) 94-99-22-04</p>
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <h2>
              <Link className='text-white'>MachineGunYurt</Link>
            </h2>
          </div>
          <div className='col-3'>
          <div className="input-group">
          <input type="text" class="form-control py-2" placeholder="Search from Products" aria-label="Search from Products" aria-describedby="basic-addon2" />
          <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-6'/></span>
          </div> 
          </div>
          <div className='col-3'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div className='Mbigger'>
                <Link><img src={require('../images/login.png')} alt='Login'/></Link>
                <p>Log in <br/> Create account</p>
              </div>
              <div>
              <Link><img src={require('../images/cart.png')} alt='Cart'/></Link>
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header