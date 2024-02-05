import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';


function Header() {
  return (
    <div>
      <header className='header-top-strip align-items-center text-sm py-3'>
        <div className='container-xxl' >
          <div className='row'>
            <div className='col-6 d-flex justify-content-center'>
              <p className='text-white mb-0'>
                Free Shipping over ₦50K & Free Returns
              </p>
            </div>
            <div className='col-6 d-flex justify-content-center'>
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
            <div className="col-2 d-flex justify-content-center">
              <h2>
                <Link className="text-white" >Nuyola</Link>
              </h2>
            </div>
            <div className="col-5 py-2">
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
            <div className="col-5">
              <div className="header-upper-links d-flex justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/compare.svg" alt='Compare products' />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/wishlist.svg" alt='Check wishlist' />
                    <p className='mb-0'>Check <br /> wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/user.svg" alt='User' />
                    <p className='mb-0'>Log in <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white pt-2'>
                    <img src="/images/cart.svg" alt='Cart' />
                    <div className='d-flex flex-column gap-10 pt-1'>
                      <span className='badge bg-white text-dark'></span>
                      <p className='mb-0'>₦2,500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;