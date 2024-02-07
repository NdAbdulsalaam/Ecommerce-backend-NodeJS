import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
		{/* Footer Top */}
    <div className='section'>
    <div className=' footer-newsletter'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="d-flex align-items-center justify-content-center">
                <img src='images/newsletter.png' />
                <h4 className='text-white mb-0'>Sign Up For Our Newsletter</h4>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-8'>
            <div className="input-group  d-flex align-items-center justify-content-center">
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
      </div>
		<div className="footer-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6 col-12">
						{/* Single Widget */}
						<div className="single-footer about">
							<div className="logo">
								<a href="index.html"><img src="images/logo2.png" alt="#" /></a>
							</div>
							<p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
							<p className="call">Got Question? Call us 24/7<span><a href="tel:+23468874902">+2348168874902</a></span></p>
						</div>
						{/* End Single Widget */}
					</div>
					<div className="col-lg-2 col-md-6 col-12">
						{/* Single Widget */}
						<div className="single-footer links">
							<h4>Information</h4>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Faq</a></li>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Help</a></li>
							</ul>
						</div>
						{/* End Single Widget */}
					</div>
					<div className="col-lg-2 col-md-6 col-12">
						{/* Single Widget */}
						<div className="single-footer links">
							<h4>Customer Service</h4>
							<ul>
								<li><a href="#">Payment Methods</a></li>
								<li><a href="#">Money-back</a></li>
								<li><a href="#">Returns</a></li>
								<li><a href="#">Shipping</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>
						{/* End Single Widget */}
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						{/* Single Widget */}
						<div className="single-footer social">
							<h4>Get In Tuch</h4>
							{/* Single Widget */}
							<div className="contact">
								<ul>
									<li>3 Tajudeen Ariyo Street </li>
                  <li>Irawo Bus-stop, Ikorodu</li>
									<li>Lagos, Nigeria</li>
									<li>olaitansalaam2012</li>
									<li>+2348168874902</li>
								</ul>
							</div>
							{/* End Single Widget */}
							<ul>
								<li><a href="#"><i className="ti-facebook"></i></a></li>
								<li><a href="#"><i className="ti-twitter"></i></a></li>
								<li><a href="#"><i className="ti-flickr"></i></a></li>
								<li><a href="#"><i className="ti-instagram"></i></a></li>
							</ul>
						</div>
						{/* End Single Widget */}
					</div>
				</div>
			</div>
		</div>
    </div>
		{/* End Footer Top */}
		<div className="copyright">
			<div className="container">
				<div className="inner">
					<div className="row">
						<div className="col-lg-6 col-12">
							<div className="left">
								<p>Copyright © {new Date().getFullYear()} <a href="http://www.wpthemesgrid.com" target="_blank">Nurudeen Abdulsalaam</a>  -  All Rights Reserved.</p>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="right">
								<img src="images/payments.png" alt="#" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </div>
  )
}

export default Footer