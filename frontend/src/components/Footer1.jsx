import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className='py-3'>
        <div className="containe-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center justify-content-center">
                <img src='images/newsletter.png' />
                <h2 className='text-white mb-0'>Sign Up For Our Newsletter</h2>
              </div>
            </div>
            <div className='col-6'>
            <div className="input-group align-items-center">
                <input type="text" className="form-control py-1" 
                  placeholder="Your Email Address" 
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2" 
                />
                <span className="input-group-text p-1" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white m-2'>Contact Us</h4>
            </div>
            <div className="col-3">
              <h4 className='text-white m-2'>Information</h4>
            </div>
            <div className="col-3">
              <h4 className='text-white m-2'>Account</h4>
            </div>
            <div className="col-2">
              <h4 className='text-white m-2'>Quick Links</h4>
                <div className='footer-link'>
                  <Link></Link>
                  <Link></Link>
                  <Link></Link>
                  <Link></Link>
                </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-0 text-white">
                <p>&copy;{new Date().getFullYear()}: Powered by Nurudeen Abdulsalaam</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;