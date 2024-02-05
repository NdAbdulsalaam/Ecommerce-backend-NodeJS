import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';


function Header() {
  return (
    <div>
      <header className='header-top-strip py-3'>
        <div className='container-xxl' >
          <div className='row align-items-center'>
            <div className='col-6 align-items-center'>
              <p className='text-white mb-0'>
                Free Shipping over ₦50K & Free Returns
              </p>
            </div>
            <div className='col-6'>
              <p className='text-white mb-0'>
                Hotline: <a className='text-white' href='tel:+2348168874902'>+2348168874902</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" >Nuyola</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" 
                  placeholder="Search products here..." 
                  aria-label="Search products here..."
                  aria-describedby="basic-addon2" 
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch  className='fs-6'/>
                </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;