import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icon/bs';


function Header() {
  return (
    <div>
      <header className='header-top-strip py-3'>
        <div className='container-xxl' >
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
                Free Shipping over ₦50K & Free Returns
              </p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline: <a className='text-white' href='tel:+2348168874902'>+2348168874902</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white" >Nuyola</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input type="text" class="form-control" 
                  placeholder="Search product here" 
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2" 
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch />
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